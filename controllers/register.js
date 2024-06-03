const mongoose = require("mongoose");
const { User } = require("../models/userModel");

const register = async (req, res) => {
  const { fullname, username, email, password, balance } = req.body;

  try {

    if(!fullname || !username || !email || !password) {
        return res.status(400).json({error: "All fileds are required ❌🚫"})
    }

    const USER = await User.create({
      fullname,
      username,
      email,
      password,
      balance,
    });

    console.log(USER);

    if (USER) {
      return res.status(200).json({ message: "User Created Successfully.👏🥳" });
    }
  } catch (error) {
    console.error(error);
    if(error.code === 11000) {
      return res.status(400).json({error: "This user already exists 😉🥲"})
    }
  }
};

module.exports = { register };
