const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const Category = require('./Category');

const CategoryAttribute = sequelize.define('CategoryAttribute', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataType: {
        type: DataTypes.STRING, // Data type of the attribute (e.g., 'text', 'number', 'boolean', etc.)
        allowNull: false
    }
});

CategoryAttribute.belongsTo(Category);
Category.hasMany(CategoryAttribute);

module.exports = CategoryAttribute;