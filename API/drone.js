var mongoose = require("mongoose");

var DroneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  drill: {
    type: String,
    required: true
  },
  inventory_size: {
    type: Number,
    required: true
  },
  inventory: {
    type: Array,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
})

var Drone = mongoose.model("Drone", DroneSchema);

module.exports = Drone;
