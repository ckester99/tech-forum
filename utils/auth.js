const { User } = require("../models");

const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect("/login");
    } else {
        next();
    }
};

const getUserId = async (req, res) => {
    const userId = req.session.user_id;
    if (userId) {
        return userId;
    } else {
        throw new Error("User not signed in");
    }
};

module.exports = { withAuth, getUserId };
