const mongoose = require('mongoose');
const OrderSchema = require('../schemas/OrderSchema');

const OrderModel = new mongoose.model('order',OrderSchema);

module.exports = {OrderModel};