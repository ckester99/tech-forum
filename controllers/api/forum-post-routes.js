const router = require("express").Router();
const { User, ForumPost, Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const forumPosts = await ForumPost.findAll({ include: Comment });
        res.json(forumPosts);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const forumPost = await ForumPost.findByPk(req.params.id, { include: Comment });
        res.json(forumPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        /* 
    req body should look like:
    {
        title: "username string",
        content: "password string",
        user_id: "user id string" WILL BE REMOVED ONCE USER AUTH
    }
    */

        const newUser = {
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id, // This will need to be grabbed from session once user auth
        };

        await ForumPost.create(newUser);
        res.send("New post created successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        //need to verify that session user id matches user id on post
        await ForumPost.destroy({ where: { id: req.params.id } });
        res.send("Post deleted successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
