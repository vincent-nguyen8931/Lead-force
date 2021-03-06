var express = require("express");
var db = require("./models");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("client/build"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

if (process.env.NODE_ENV === "production") {
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
}

// Here we introduce HTML routing to serve different HTML files
// require("./routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});