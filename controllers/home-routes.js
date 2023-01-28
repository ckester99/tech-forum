const router = require("express").Router();
const { ForumPost, User } = require("../models");

router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", async (req, res) => {
    try {
        const forumPosts = await ForumPost.findAll({ order: [["timestamp", "DESC"]], include: User });
        const forumPostsPlain = forumPosts.map((post) => post.get({ plain: true }));

        res.render("home", { user_id: req.session.user_id, forum_posts: forumPostsPlain });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/login", (req, res) => {
    res.render("login", { user_id: req.session.user_id });
});

module.exports = router;
