const sequelize = require("../config/connection");
const User = require("./User");
const ForumPost = require("./ForumPost");
const Comment = require("./Comment");

User.hasMany(ForumPost, { foreignKey: "user_id" });
ForumPost.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });

ForumPost.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(ForumPost, { foreignKey: "post_id" });

module.exports = {
    User,
    ForumPost,
    Comment,
};
