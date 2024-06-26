const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const Product = require('./product-model');
const ProductAttribute = require('./product-attribute-model');



const Attribute = sequelize.define('Attribute', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING, // e.g., 'text', 'number', 'date', 'boolean'
        allowNull: false,
    },
});


module.exports = Attribute;  