const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      phone: { type: DataTypes.STRING, allowNull: false },
      password: DataTypes.STRING,
    },
    { tableName: "users" }
  );

  return Users;
};
