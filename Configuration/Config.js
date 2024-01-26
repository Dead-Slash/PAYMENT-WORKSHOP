const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Test11");
    console.log("data base is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = ConnectDB;
