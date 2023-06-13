const Sighting = require("../models/sighting.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};
//*-------------- CREATE --------------*//
module.exports.createSighting = (request, response) => {
  request.body.images = request.files.map((file) => file.filename);
  request.body.user = JSON.parse(request.body.user);
  request.body.sighting = JSON.parse(request.body.sighting);
  request.body.sighting.images = request.body.images;

  console.log("request.body", request.body);
  Sighting.create(request.body)
    .then((sighting) => {
      console.log("sighting", sighting);
      response.json(sighting);
    })
    .catch((err) => {
      console.log("err", err);
      response.status(400).json({ error: err.message });
    });
};

//*-------------- READ ALL --------------*//
module.exports.getAllSightings = (request, response) => {
  Sighting.find({})
    .then((sightings) => response.json(sightings))
    .catch((err) => response.status(500).json({ error: err.message }));
};

//*-------------- UPDATE --------------*//
module.exports.updateSighting = (request, response) => {
  const { id } = request.params;
  const { adminResponse } = request.body;
  Sighting.findByIdAndUpdate(
    id,
    { "adminResponse.response": adminResponse },
    { new: true, useFindAndModify: false },
  )
    .then((sighting) => response.json(sighting))
    .catch((err) => response.status(500).json({ error: err.message }));
};

//*-------------- DELETE --------------*//
module.exports.deleteSighting = (request, response) => {
  Sighting.findByIdAndDelete(request.params.id)
    .then(() => response.json({ success: true }))
    .catch((err) => response.status(500).json({ error: err.message }));
};
