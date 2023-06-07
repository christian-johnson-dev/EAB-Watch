const mongoose = require("mongoose");
const dbName = "sightingsDB";
mongoose
  .connect(`mongodb://127.0.01:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Established a connection to the database ${dbName}`))
  .catch((err) => console.log(`Error connecting to ${dbName}`, err));
