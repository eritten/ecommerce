const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const Product = require('./product-model');
const Review = require('./review-model');

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verificationCode: {
        type: DataTypes.STRING, allowNull: false
    },
    profileImageUrl: {
        type: DataTypes.STRING, allowNull: true
    },
    isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    }

},

    {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });


module.exports = User;