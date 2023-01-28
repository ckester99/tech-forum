const sequelize = require("../config/connection");
const { ForumPost } = require("../models");

const seedForumPosts = async () => {
    await ForumPost.bulkCreate([
        { id: 1, title: "I just started learning JavaScript!", content: "Wish me luck!", user_id: 1, timestamp: new Date(2023, 0, 24, 12, 1, 1) },
        {
            id: 2,
            title: "Does anyone know how to reference the last element of an array?",
            content: "TestContent2",
            user_id: 2,
            timestamp: new Date(2023, 0, 24, 13, 2, 2),
        },
        {
            id: 3,
            title: "Hello Everybody!",
            content: "I just signed up, looking forward to talking to all of you!",
            user_id: 3,
            timestamp: new Date(2023, 0, 24, 14, 3, 3),
        },
        {
            id: 4,
            title: "CSS Frameworks",
            content: "I'm really into tailwindCSS, does anyone know any other good frameworks?",
            user_id: 4,
            timestamp: new Date(2023, 0, 24, 15, 4, 4),
        },
        {
            id: 5,
            title: "React Tips",
            content: "I'm struggling to understand how state works, can someone help me?",
            user_id: 5,
            timestamp: new Date(2023, 0, 24, 16, 5, 5),
        },
        { id: 6, title: "I just made my first API!", content: "I'm super excited about it", user_id: 5, timestamp: new Date(2023, 0, 24, 17, 6, 6) },
        {
            id: 7,
            title: "What do you enjoy more, Frontend or Backend?",
            content: "I prefer backend myself",
            user_id: 4,
            timestamp: new Date(2023, 0, 24, 18, 1, 1),
        },
        {
            id: 8,
            title: "I just graduated!",
            content: "I'm looking forward to joining the workforce",
            user_id: 3,
            timestamp: new Date(2023, 0, 24, 19, 2, 2),
        },
        {
            id: 9,
            title: "Coming up with seed data is hard",
            content: "I just like to repeat the same themes, but change the context a little to come up with unique entries",
            user_id: 2,
            timestamp: new Date(2023, 0, 24, 20, 3, 3),
        },
        { id: 10, title: "I am a javascript professional", content: "ama", user_id: 2, timestamp: new Date(2023, 0, 18, 21, 4, 4) },
    ]);
};

module.exports = seedForumPosts;
