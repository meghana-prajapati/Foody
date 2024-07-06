const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://1816510084:8XPTligc5NIPHxjv@foody.uka6rug.mongodb.net/?retryWrites=true&w=majority&appName=foody"
    );
    console.log("database is connected.");
  } catch (error) {
    console.log(`Error connecting database! ${error}`);
  }
};
module.exports = connectDB;
