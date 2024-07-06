const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
  },
  imageURL: {
    type: String,
    required: false,
  },
});

const restaurantModel = new mongoose.model("restaurantModel", restaurantSchema);
module.exports = restaurantModel;
