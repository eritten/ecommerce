const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const Product = require('./product-model');
const Attribute = require('./attribute-model');

const ProductAttribute = sequelize.define('ProductAttribute', {
    value: {
        type: DataTypes.STRING, // Store all values as strings, convert as necessary in your app
        allowNull: false,
    },
});

module.exports = ProductAttribute;  