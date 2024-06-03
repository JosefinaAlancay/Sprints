const Product = require('./Product');
const Order = require('./Order');

const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const alias = "OrderProduct"
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    const config = {
        timestamps: false,
        tableName: "order_products"
    }

    const OrderProduct = sequelize.define(alias, cols, config);

    return OrderProduct;
}