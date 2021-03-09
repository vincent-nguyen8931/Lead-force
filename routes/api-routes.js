var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  // Create new leads
  app.post("/api/leads", function (req, res) {
    console.log(req.body)
    db.Lead.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email
    })
      .then(function (dbLead) {
        res.json(dbLead);
      });
  });

  // Find all leads
  app.get("/api/leads/", function (req, res) {
    db.Lead.findAll({})
      .then(function (dbLead) {
        res.json(dbLead);
      });
  });

  // Find specific leads
  app.get("/api/leads/:id", function (req, res) {
    db.Lead.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbLead) {
        res.json(dbLead);
      });
  });

  // Update lead
  app.put("/api/leads/:id", function (req, res) {
    console.log("hello")
    db.Lead.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function (dbLead) {
        console.log("dbLead")
        console.log(dbLead)
        res.json(dbLead);
      });
  });

  // Delete lead
  app.delete("/api/leads/:id", function (req, res) {
    db.Lead.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbLead) {
        res.json(dbLead);
      });
  });

  /*
  Create new user route. The user's password is automatically hashed and stored securely due to configuration in our Sequelize User Model. 
  If the user is created successfully, proceed to log the user in, otherwise send back an error
    */
  app.post("/api/registerUser", function (req, res) {
    console.log(req.body)
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    })
      .then(function () {
        console.log("User successfully cretaed.")
        res.json({ success: true, message: "Account created. Please login." });
      })
      .catch(function (err) {
        console.log(err)
        console.log("error occured")
        res.status(401).json(err);
      });
  });

  /*
  Using the passport.authenticate middleware with our local strategy.
  If the user has valid login credentials, send them to the members page.
  Otherwise the user will be sent an error
  */
  app.post("/api/login", passport.authenticate("local", { successRedirect: '/members', failureRedirect: '/'}), function (req, res) {
    console.log("logged in successfully")
    res.json(req.user);
  });

}