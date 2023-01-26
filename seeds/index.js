const seedUsers = require("./seedUsers");
const seedForumPosts = require("./seedForumPosts");
const seedComments = require("./seedComments");
const sequelize = require("../config/connection");

const seedData = async () => {
    console.log("\n----Syncing Database----\n");
    await sequelize.sync({ force: true });

    console.log("\n----Seeding Users----\n");
    await seedUsers();

    console.log("\n----Seeding Forum Posts!----\n");
    await seedForumPosts();

    console.log("\n----Seeding Forum Comments!----\n");
    await seedComments();

    process.kill(0);
};

seedData();
