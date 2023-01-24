const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class ForumPost extends Model {}

ForumPost.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

        title: { type: DataTypes.STRING, allowNull: false },

        content: { type: DataTypes.STRING, allowNull: false },

        user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: "user", key: "id" } },

        timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    { sequelize, modelName: "forum_post", freezeTableName: true }
);

module.exports = ForumPost;
