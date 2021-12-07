const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Product = sequelize.define("product", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, unique: true, allowNull: false },
	size: { type: DataTypes.STRING, allowNull: false },
	volume: { type: DataTypes.REAL, defaultValue: 0 },
	price: { type: DataTypes.REAL, defaultValue: 0 },
	pricends: { type: DataTypes.REAL, defaultValue: 0 },
	type: { type: DataTypes.STRING, allowNull: false },
	count: { type: DataTypes.INTEGER, defaultValue: 1 },
});

module.exports = { User, Product };
