const router = require("express").Router();
const { User, ForumPost, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        const forumPosts = await ForumPost.findAll({ where: { user_id: req.session.user_id }, include: User });
        const forumPostsPlain = forumPosts.map((post) => post.get({ plain: true }));
        const comments = await Comment.findAll({ where: { user_id: req.session.user_id }, include: [User, ForumPost] });
        const commentsPlain = comments.map((comment) => comment.get({ plain: true }));
        const posts_and_comments = forumPostsPlain.concat(commentsPlain).sort((a, b) => {
            return b.timestamp - a.timestamp;
        });

        res.render("dashboard", { user_id: req.session.user_id, posts_and_comments: posts_and_comments });
    } catch (err) {
        res.send(400).send(err);
    }
});

module.exports = router;
