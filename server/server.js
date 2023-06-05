const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
require("./routes/sightings.routes")(app);
app.use(express.json(), express.urlencoded({ extended: true }));
require("./config/mongoose.config");
