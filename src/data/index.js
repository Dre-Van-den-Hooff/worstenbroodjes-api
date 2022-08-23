const mongoose = require("mongoose");
const config = require("config");

const DB_URI = config.get("database.DB_URI");

const initializeConnection = async () => {
  await mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch(error => {
      console.log("Something went wrong", error);
    });
};

module.exports = { initializeConnection };
