const Sighting = require("../models/sighting.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};
//*-------------- CREATE --------------*//
module.exports.createSighting = (request, response) => {
  console.log("request.body", request.body);
  Sighting.create(request.body)
    .then((sighting) => {
      console.log("sighting", sighting);
      response.json(sighting);
    })
    .catch((err) => {
      console.log("err", err);
      response.status(400).json(err);
    });
};
