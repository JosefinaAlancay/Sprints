const Product = require('./Product');

module.exports = (sequelize, DataTypes) => {
    const alias = "ProductCategory"
    const cols = {
        id: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        }
    };
    const config = {
        tableName: "products_categories",
        timestamps: false
    }

    const ProductCategory = sequelize.define(alias, cols, config);

    ProductCategory.associate = (models) => {
        ProductCategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "productCategoryId"
        })
    }
    return ProductCategory;
}
