var db = require("../models");
module.exports = function (app) {


  // Create new leads
  app.post("/api/leads/:id", function (req, res) {
    db.Lead.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      opportunity: req.body.opportunity,
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
  app.put("/api/leads", function (req, res) {
    db.Lead.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function (dbLead) {
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
}