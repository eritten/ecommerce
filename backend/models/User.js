const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');

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
    isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = User;