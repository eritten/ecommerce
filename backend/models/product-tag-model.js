const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const Product = require('./product-model');
const Tag = require('./tag-model');

const ProductTag = sequelize.define('ProductTag', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

module.exports = ProductTag;
