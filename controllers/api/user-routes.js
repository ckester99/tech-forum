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
        console.log(req.body);
        const hashedPassword = req.body.password;
        const newUser = { username: req.body.username, hashed_password: hashedPassword };

        await User.create(newUser);
        res.send("New user created successfully");
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
