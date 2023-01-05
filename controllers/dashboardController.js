//For Register Page
const Locations = require('../models/Locations');
const dashboardView = (req, res) => {
    res.render("dashboard", {
      user: req.user
    });
};

const getLocations = async (req, res) => {
  const findResult = await Locations.find({
    user_id: req.userId,
  });
  if (!findResult) {
    findResult
  } 
  res.render("dashboard"), {
    locations: req.findResult
  }
}

module.exports = {
    dashboardView,
    getLocations
};