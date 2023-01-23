const express = require("express");
const routes = require("./controllers");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
});
