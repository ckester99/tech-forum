const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

        content: { type: DataTypes.STRING, allowNull: false },

        user_id: { type: DataTypes.INTEGER, allowNull: false },

        post_id: { type: DataTypes.INTEGER, allowNull: false },

        timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    { sequelize, modelName: "forum_post", freezeTableName: true }
);

module.exports = Comment;
