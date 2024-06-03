const Client = require('./Client');
const Order = require('./Order');

module.exports = (sequelize, DataTypes) => {
    const alias = "Account";
    const cols = {
        id: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(65),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        clientId: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        accountCategoryId: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        orderId: {
            type: DataTypes.TINYINT,
            allowNull: false
        }
    };

    const config = {
        tableName: "accounts",
        timestamps: false
    };

    const Account = sequelize.define(alias, cols, config);

    Account.associate = (models) => {
        Account.belongsTo(models.Client, {
            as: "client",
            foreignKey: "clientId"
        });
        Account.belongsTo(models.AccountCategory, {
            as: "account_category",
            foreignKey: "accountCategoryId"
        });
    };

    return Account;
};
