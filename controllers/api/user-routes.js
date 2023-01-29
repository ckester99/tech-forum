const router = require("express").Router();
const { User, Comment, ForumPost } = require("../../models");
const bcrypt = require("bcrypt");
const session = require("express-session");

router.get("/", async (req, res) => {
    try {
        const users = await User.findAll({ include: [Comment, ForumPost], attributes: { exclude: "hashed_password" } });
        res.json(users);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/id", (req, res) => {
    res.json(req.session.user_id);
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, { include: [Comment, ForumPost], attributes: { exclude: "hashed_password" } });
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
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            const newUser = { username: req.body.username, hashed_password: hash };

            await User.create(newUser);
            res.send("New user created successfully");
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/logout", async (req, res) => {
    req.session.destroy();
    res.send("Logged out successfully!");
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
        if (!user) {
            throw new Error("Username or password is incorrect!");
        }
        const validPass = await bcrypt.compare(req.body.password, user.hashed_password);

        if (!validPass) {
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
