const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const forumPostRoutes = require("./forum-post-routes");

router.use("/user", userRoutes);
router.use("/forum-post", forumPostRoutes);

module.exports = router;
