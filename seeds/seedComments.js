const sequelize = require("../config/connection");
const { Comment } = require("../models");

const seedComments = async () => {
    await Comment.bulkCreate([
        { id: 1, content: "Very cool, its an awesome journey!", user_id: 1, post_id: 1, timestamp: new Date(2023, 0, 24, 12, 1, 1) },
        { id: 2, content: "Thank you! Its been fun so far!", user_id: 2, post_id: 1, timestamp: new Date(2023, 0, 24, 13, 2, 2) },
        { id: 3, content: "Lets goooo", user_id: 3, post_id: 1, timestamp: new Date(2023, 0, 24, 14, 3, 3) },
        { id: 4, content: "const lastItem = array[array.length - 1]", user_id: 4, post_id: 2, timestamp: new Date(2023, 0, 24, 15, 4, 4) },
        {
            id: 5,
            content: "Find the length and then index the array at index - 1",
            user_id: 5,
            post_id: 2,
            timestamp: new Date(2023, 0, 24, 16, 5, 5),
        },
        { id: 6, content: "Good luck!", user_id: 5, post_id: 1, timestamp: new Date(2023, 0, 24, 17, 6, 6) },
        {
            id: 7,
            content: "Theres a lot of good content on YouTube, I like fireship.io!",
            user_id: 4,
            post_id: 5,
            timestamp: new Date(2023, 0, 24, 18, 1, 1),
        },
        { id: 8, content: "I enjoy working on the backend more", user_id: 3, post_id: 7, timestamp: new Date(2023, 0, 24, 19, 2, 2) },
        { id: 9, content: "Congratulations!!!", user_id: 2, post_id: 8, timestamp: new Date(2023, 0, 24, 20, 3, 3) },
        { id: 10, content: "Good work!", user_id: 2, post_id: 6, timestamp: new Date(2023, 0, 24, 21, 4, 4) },
    ]);
};

module.exports = seedComments;
