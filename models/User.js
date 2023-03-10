const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

        username: { type: DataTypes.STRING, unique: true },

        hashed_password: { type: DataTypes.STRING },
    },
    { sequelize, modelName: "user", freezeTableName: true, updatedAt: false }
);

module.exports = User;
