// Review.js
const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const User = require('./User');
const Product = require('./Product');

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

Review.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
Review.belongsTo(Product, { as: 'product', foreignKey: 'product_id' });
User.hasMany(Review, { as: 'reviews', foreignKey: 'user_id' });
Product.hasMany(Review, { as: 'reviews', foreignKey: 'product_id' });

module.exports = Review;