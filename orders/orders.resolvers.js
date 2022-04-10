const orderModel = require('./orders.model');

module.exports = {
  Query: {
    orders: (parent) => {
      console.log('Geeting the orders...');
      return orderModel.getAllOrders();
    }
  }
};
