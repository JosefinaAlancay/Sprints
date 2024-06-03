const Account = require('./Account');

module.exports = (sequelize, DataTypes) => {
    const alias = "AccountCategory"
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
        tableName: "account_category",
        timestamps: false
    }

    const AccountCategory = sequelize.define(alias, cols, config);

    AccountCategory.associate = (models) => {
        AccountCategory.hasMany(models.Account, {
            as: "accounts",
            foreignKey: "accountCategoryId"
        });
    }
    return AccountCategory;
}
