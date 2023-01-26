const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const forumPostRoutes = require("./forum-post-routes");
const commentRoutes = require("./comment-routes");

router.use("/user", userRoutes);
router.use("/forum-post", forumPostRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
