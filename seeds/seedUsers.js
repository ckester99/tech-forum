const sequelize = require("../config/connection");
const { User } = require("../models");
const bcrypt = require("bcrypt");

const seedUsers = async () => {
    await User.bulkCreate([
        { id: 1, username: "L_Smith", hashed_password: "$2b$10$oKrcsjSzHd7VOUS9cSFJK.F8U66EMXWJQmgCVuSOD/G35t4aQ7rXy" }, //password: password1
        { id: 2, username: "RSmith3", hashed_password: "$2b$10$Q/zM2zmZDhUP64skhP95t.SQLwnB9OqhL9Bf6IDoAw/4/ectA6cie" }, //password: password2
        { id: 3, username: "Olivia", hashed_password: "$2b$10$pNnaZIq8XD5yjdT0.GD/qOlFWv28/PSd2iiCEorFAlUCtUr4BNDZC" }, //password: password3
        { id: 4, username: "Emma_B", hashed_password: "$2b$10$DKLqr6AOINcKFoZ2nAZ7nexFkqTsFclTHaZpfROTvYu22bm2.8MtS" }, //password: password4
        { id: 5, username: "Robert0", hashed_password: "$2b$10$VppvxQSiNO22igHskAWCi.Q.6XMfGIUrXf63lwp2zCG8CJfrp.poG" }, //password: password5
    ]);
};

module.exports = seedUsers;
