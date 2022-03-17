const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();

const port = process.env.PORT || 8000;

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayout);

app.set("layout", "layouts/main");
app.set("view engine", "ejs");

const route = require("./server/routes/recipeRoutes.js");
app.use("/", route);

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});
