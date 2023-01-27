const router = require("express").Router();
const { User, ForumPost, Comment } = require("../../models");
const { withAuth } = require("../../utils/auth");

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

router.post("/", withAuth, async (req, res) => {
    try {
        /* 
    req body should look like:
    {
        content: "password string",
        post_id: "post id"
    }
    */

        const newComment = {
            content: req.body.content,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        };
        console.log(newComment.user_id);
        await Comment.create(newComment);
        res.send("New comment created successfully!");
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
        //need to verify that session user id matches user id on post
        const user_id = req.session.user_id;
        const commentData = await Comment.findByPk(req.params.id);

        if (user_id == commentData.user_id) {
            await Comment.destroy({ where: { id: req.params.id } });
            res.send("Comment deleted successfully!");
        } else {
            res.send("User did not post this comment!");
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;
