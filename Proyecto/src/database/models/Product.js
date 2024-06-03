const ProductCategory = require('./ProductCategory');
const Specification = require('./Specification');
const OrderProduct = require('./OrderProduct');

module.exports = (sequelize, DataTypes) => {
    const alias = "Product"
    const cols = {
        id: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        discount: {
            type: DataTypes.FLOAT
        },
        image: {
            type: DataTypes.STRING(255)
        },
        orderId: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        productCategoryId: {
            type: DataTypes.TINYINT,
            allowNull: false
        }

    };
    const config = {
        tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsToMany(models.Order, {
            through: models.OrderProduct,
            as: "order",
            foreignKey: "orderId"
        })
        Product.hasOne(models.Specification, {
            as: "specification",
            foreignKey: "productId"
        })
        Product.belongsTo(models.ProductCategory, {
            as: "product_category",
            foreignKey: "productCategoryId"
        })
    }

    return Product;
}
