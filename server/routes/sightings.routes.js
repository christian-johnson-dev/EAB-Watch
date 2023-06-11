const SightingsController = require("../controllers/sightings.controller");

const multer = require("multer"); // import multer middleware
const upload = multer({ dest: "uploads/" }); // set up the destination folder for uploaded files
module.exports = (app) => {
  app.get("/api", SightingsController.index);
  app.post(
    "/api/sighting",
    upload.array("images", 12),
    SightingsController.createSighting,
  );
};
