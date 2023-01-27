const router = require("express").Router();
const { User, Comment, ForumPost } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const users = await User.findAll({ include: [Comment, ForumPost] });
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, { include: [Comment, ForumPost] });
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
    /* 
    req body should look like:
    {
        username: "username string",
        password: "password string"
    }
    */

    try {
        const hashedPassword = req.body.password; //todo: hash password
        const newUser = { username: req.body.username, hashed_password: hashedPassword };

        await User.create(newUser);
        res.send("New user created successfully");
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        /* 
    req body should look like:
    {
        username: "username string",
        password: "password string"
    }
    */
        const user = await User.findOne({ where: { username: req.body.username } });
        const validPass = req.body.password == (await user.hashed_password);

        if (!user || !validPass) {
            console.log("Username incorrect!");
            throw new Error("Username or password is incorrect!");
        }

        req.session.save(() => {
            req.session.user_id = user.id;
            res.send("Logged in successfully!");
        });
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});

module.exports = router;
