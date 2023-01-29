const router = require("express").Router();
const { ForumPost, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/:id", async (req, res) => {
    try {
        const forumPost = await ForumPost.findByPk(req.params.id, { include: [User, Comment] });
        const forumPostPlain = forumPost.get({ plain: true });
        const comments = await Comment.findAll({ where: { post_id: req.params.id }, include: [User, ForumPost] });
        const commentsPlain = comments.map((comment) => comment.get({ plain: true }));

        res.render("forum-post-page", { user_id: req.session.user_id, forum_post: forumPostPlain, comments: commentsPlain });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
        //need to verify that session user id matches user id on post
        const user_id = req.session.user_id;
        const postData = await ForumPost.findByPk(req.params.id);

        if (user_id == postData.user_id) {
            await ForumPost.destroy({ where: { id: req.params.id } });
            res.send("post deleted successfully!");
        } else {
            res.send("User did not post this!");
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;
