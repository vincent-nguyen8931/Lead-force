var express = require("express");
var db = require("./models");
var path = require("path");
var session = require("express-session");
var passport = require("passport")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("client/build"));

// Passport use
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});