const Product = require('./Product');

module.exports = (sequelize, DataTypes) => {
    const alias = "Specification"
    const cols = {
        id: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true
        },
        brand: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        material: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        stringNumber: {
            type: DataTypes.TINYINT,
            allowNull: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productId: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
    };
    const config = {
        tableName: "specifications",
        timestamps: false
    }

    const Specification = sequelize.define(alias, cols, config);

    Specification.associate = (models) => {
        Specification.belongsTo(models.Product, {
            as: "product",
            foreignKey: "productId"
        })
    }
    return Specification;
}
