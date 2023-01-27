const router = require("express").Router();
const { User, ForumPost, Comment } = require("../../models");
const { withAuth } = require("../../utils/auth");

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

router.post("/", withAuth, async (req, res) => {
    try {
        /* 
    req body should look like:
    {
        title: "username string",
        content: "password string",
    }
    */

        const newForumPost = {
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        };

        await ForumPost.create(newForumPost);
        res.send("New post created successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        //need to verify that session user id matches user id on post
        const user_id = req.session.user_id;
        const forumPostData = await ForumPost.findByPk(req.params.id);

        if (user_id == forumPostData.user_id) {
            await ForumPost.destroy({ where: { id: req.params.id } });
            res.send("Post deleted successfully!");
        } else {
            res.send("Post was not made by user!");
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
