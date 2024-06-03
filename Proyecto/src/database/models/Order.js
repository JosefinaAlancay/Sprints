const Account = require('./Account');
const Product = require('./Product');
const OrderProduct = require('./OrderProduct');

module.exports = (sequelize, DataTypes) => {
    const alias = "Order"
    const cols = {
        id: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true
        },
        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        send: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        productId: {
            type: DataTypes.TINYINT,
            allowNull: false
        },       
    };
    const config = {
        tableName: "orders",
        timestamps: true,
        createdAt: 'createdTimestamp',
        updatedAt: 'updatedTimestamp'
    }

    const Order = sequelize.define(alias, cols, config);

    Order.associate = (models) => {
        Order.hasMany(models.Account, {
            as: "account",
            foreignKey: "accountId"
        })
        Order.belongsToMany(models.Product, {
            through: models.OrderProduct,
            as: "product",
            foreignKey: "orderId"
        })
    }

    return Order;
}