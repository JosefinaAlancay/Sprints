const Account = require("./Account");

module.exports = (sequelize, DataTypes) => {
    const alias = "Client"
    const cols = {
        id: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true
        },
        fullName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        postalCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    };
    const config = {
        tableName: "clients",
        timestamps: false
    };

    const Client = sequelize.define(alias, cols, config);

    Client.associate = (models) => {
        Client.hasMany(models.Account, {
            as: "accounts",
            foreignKey: "clientId"
        });
    };


    return Client;
}
