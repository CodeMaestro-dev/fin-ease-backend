const { error } = require("console");
const mongoose = require("mongoose");
require("dotenv").config();

// connecting to database
const connectToDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to Database and ready for CRUD.");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = connectToDB;
