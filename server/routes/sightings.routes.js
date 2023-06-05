const SightingsController = require("../controllers/sightings.controller");
module.exports = (app) => {
  app.get("/api", SightingsController.index);
};
