const router = require("express").Router();
const { User, ForumPost, Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const comments = await Comment.findAll({ include: ForumPost });
        res.json(comments);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id, { include: ForumPost });
        res.json(comment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        /* 
    req body should look like:
    {
        content: "password string",
        user_id: "user id string" WILL BE REMOVED ONCE USER AUTH
        post_id: "post id"
    }
    */

        const newComment = {
            content: req.body.content,
            user_id: req.body.user_id, // This will need to be grabbed from session once user auth
            post_id: req.body.post_id,
        };

        await Comment.create(newComment);
        res.send("New comment created successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        //need to verify that session user id matches user id on post
        await Comment.destroy({ where: { id: req.params.id } });
        res.send("Comment deleted successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
