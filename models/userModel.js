const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const userModel = new Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number },
    email: { type: String, required: true, unique: true },
  },

  {
    collection: "users",
  }
);

const User = model("users", userModel);

module.exports = { User };
