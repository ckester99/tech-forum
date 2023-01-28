const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class ForumPost extends Model {}

ForumPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "user", key: "id" },
        },
    },
    {
        sequelize,
        modelName: "forum_post",
        freezeTableName: true,
        createdAt: "timestamp",
        updatedAt: false,
    }
);

module.exports = ForumPost;
