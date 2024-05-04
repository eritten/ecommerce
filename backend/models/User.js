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
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING
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