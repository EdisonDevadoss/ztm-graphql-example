const orders = [
  {
    date: '2005-05-05',
    subtotal: 90,
    items: [
      {
        product: {
          id: 'redshoe',
          price: 90,
          description: 'Old Red shoe'
        },
        quantity: 2
      }
    ]
  }
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders
};
