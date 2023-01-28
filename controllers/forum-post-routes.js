const router = require("express").Router();
const { ForumPost, User, Comment } = require("../models");

router.get("/:id", async (req, res) => {
    try {
        const forumPost = await ForumPost.findByPk(req.params.id, { include: Comment });
        console.log(forumPost);
        const forumPostPlain = forumPost.get({ plain: true });
        console.log(forumPostPlain.comments);
        res.render("forum-post-page", { user_id: req.session.user_id, forum_post: forumPostPlain, comments: forumPostPlain.comments });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
