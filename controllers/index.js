const router = require("express").Router();

const homeRoutes = require("./home-routes.js");
const api = require("./api");
const forumPostRoutes = require("./forum-post-routes");
const dashboardRoutes = require("./dashboard-routes");

router.use("/", homeRoutes);
router.use("/api", api);
router.use("/forum-post", forumPostRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
