const router = require("express").Router();

const homeRoutes = require("./home-routes.js");
const api = require("./api");
const forumPostRoutes = require("./forum-post-routes");

router.use("/", homeRoutes);
router.use("/api", api);
router.use("/forum-post", forumPostRoutes);

module.exports = router;
