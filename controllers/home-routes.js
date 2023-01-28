const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("home", { user_id: req.session.user_id });
});

router.get("/home", (req, res) => {
    res.render("home", { user_id: req.session.user_id });
});

router.get("/login", (req, res) => {
    res.render("login", { user_id: req.session.user_id });
});

module.exports = router;
