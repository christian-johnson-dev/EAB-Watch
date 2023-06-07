const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

require("./config/mongoose.config");
require("./routes/sightings.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));
