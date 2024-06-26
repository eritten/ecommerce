const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const Product = require('./product-model');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Category.hasMany(Product);

module.exports = Category;