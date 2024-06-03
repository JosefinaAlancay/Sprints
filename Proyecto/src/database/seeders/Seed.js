const { AccountCategory, Account, Order, Product, ProductCategory, Specification, OrderProduct, Client } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crear categorías de cuenta
    const accountCategories = await AccountCategory.bulkCreate([
      { name: 'Admin' },
      { name: 'User' },
      { name: 'Seller' }
    ]);

    // Crear clientes
    const clients = await Client.bulkCreate([
      { fullName: 'John Doe', address: '123 Main St', postalCode: 12345 },
      { fullName: 'Jane Smith', address: '456 Oak Ave', postalCode: 67890 }
    ]);

    // Crear cuentas
    const accounts = await Account.bulkCreate([
      { username: 'johndoe', password: 'password1', email: 'johndoe@example.com', avatar: 'avatar1.png', clientId: clients[0].id, accountCategoryId: accountCategories[1].id },
      { username: 'janesmith', password: 'password2', email: 'janesmith@example.com', avatar: 'avatar2.png', clientId: clients[1].id, accountCategoryId: accountCategories[1].id }
    ]);

    // Crear categorías de productos
    const productCategories = await ProductCategory.bulkCreate([
      { name: 'Guitars' },
      { name: 'Electric Guitar' },
      { name: 'Acustic Guitar' },
      { name: 'Accesories' },
    ]);

    // Crear productos
    const products = await Product.bulkCreate([
      { name: 'Fender Stratocaster', description: 'Electric guitar', price: 1200.00, discount: 10, image: 'stratocaster.png', productCategoryId: productCategories[0].id },
      { name: 'Marshall Amplifier', description: 'Guitar amplifier', price: 900.00, discount: 5, image: 'marshall.png', productCategoryId: productCategories[1].id }
    ]);

    // Crear especificaciones
    const specifications = await Specification.bulkCreate([
      { brand: 'Fender', material: 'Wood', stringNumber: 6, color: 'Sunburst', productId: products[0].id },
      { brand: 'Marshall', material: 'Metal', stringNumber: null, color: 'Black', productId: products[1].id }
    ]);

    // Crear órdenes
    const orders = await Order.bulkCreate([
      { totalPrice: 1080.00, send: 20.00, productId: products[0].id },
      { totalPrice: 855.00, send: 25.00, productId: products[1].id }
    ]);

    // Crear productos en órdenes
    await OrderProduct.bulkCreate([
      { quantity: 1, productId: products[0].id, orderId: orders[0].id },
      { quantity: 2, productId: products[1].id, orderId: orders[1].id }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar datos en el orden inverso
    await OrderProduct.destroy({ where: {} });
    await Order.destroy({ where: {} });
    await Specification.destroy({ where: {} });
    await Product.destroy({ where: {} });
    await ProductCategory.destroy({ where: {} });
    await Account.destroy({ where: {} });
    await Client.destroy({ where: {} });
    await AccountCategory.destroy({ where: {} });
  }
};
