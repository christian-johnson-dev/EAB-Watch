const SightingsController = require("../controllers/sightings.controller");
module.exports = (app) => {
  app.get("/api", SightingsController.index);
  app.post("/api/sightings", SightingsController.createSighting);
};
