const router = require("express").Router();
const { ForumPost, User, Comment } = require("../models");

router.get("/:id", async (req, res) => {
    try {
        const forumPost = await ForumPost.findByPk(req.params.id, { include: [User, Comment] });
        const forumPostPlain = forumPost.get({ plain: true });
        const comments = await Comment.findAll({ where: { post_id: req.params.id }, include: User });
        const commentsPlain = comments.map((comment) => comment.get({ plain: true }));

        res.render("forum-post-page", { user_id: req.session.user_id, forum_post: forumPostPlain, comments: commentsPlain });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
