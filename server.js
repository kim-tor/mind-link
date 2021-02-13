require("dotenv").config();
const express = require("express");
const session = require("express-session");
const path = require("path");
// const mongoose = require("mongoose");
const passport = require("./config/passport.js");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes.js");
const db = require("./models")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(apiRoutes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Sequelize
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
