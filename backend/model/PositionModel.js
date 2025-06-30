const mongoose = require("mongoose");

const {PositionSchema} = require('../schemas/PositionSchema');


const PositionModel = new mongoose.model('position',PositionSchema);

module.exports = {PositionModel};