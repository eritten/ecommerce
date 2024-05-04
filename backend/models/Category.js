const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Category;