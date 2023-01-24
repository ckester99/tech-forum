const sequelize = require("../config/connection");
const User = require("./User");
const ForumPost = require("./ForumPost");
const Comment = require("./Comment");

User.hasMany(ForumPost, { foreignKey: "user_id" });
ForumPost.belongsTo(User);

User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User);

ForumPost.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(ForumPost);

module.exports = {
    User,
    ForumPost,
    Comment,
};
