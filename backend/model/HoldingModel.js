const mongoose  = require("mongoose");


const {HoldingSchema} = require('../schemas/HoldingSchema');

const HoldingModel = new mongoose.model("holding",HoldingSchema);

module.exports  = {HoldingModel};