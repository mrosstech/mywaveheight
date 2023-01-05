const mongoose = require("mongoose");
const LocationsSchema = new mongoose.Schema({
  stationId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});
const Locations = mongoose.model("Locations", LocationsSchema);
module.exports = Locations;