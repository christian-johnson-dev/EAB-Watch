const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

require("./config/mongoose.config");
require("./routes/sightings.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
