const express = require("express");
const routes = require("./controllers");
const path = require("path");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

// Set up sessions with cookies
const sess = {
    secret: "Super secret secret",
    cookie: {
        // Stored in milliseconds
        maxAge: 2 * 60 * 60 * 1000, // expires after 2 hours
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}!`);
    });
});
