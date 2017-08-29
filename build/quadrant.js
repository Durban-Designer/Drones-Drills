var mongoose = require("mongoose");

var QuadrantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  /* Contents Key
  0 = empty space
  x = stone
  i = iron
  a = aluminum
  s = silicon
  g = gold
  w = solid water
  */
  contents: {
    type: Array,
    required: true
  },
  empire: {
    type: String,
    required: true
  }
})

var Quadrant = mongoose.model("Quadrant", QuadrantSchema);

module.exports = Quadrant;
