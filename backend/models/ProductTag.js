const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const Product = require('./Product');
const Tag = require('./Tag');

const ProductTag = sequelize.define('ProductTag', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Tag,
            key: 'id'
        }
    }
});

module.exports = ProductTag;