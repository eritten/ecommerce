const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const Product = require('./product-model');

const Review = sequelize.define('Review', {
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    review: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});

module.exports = Review;