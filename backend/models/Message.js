// Message.js
const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const User = require('./User');

const Message = sequelize.define('Message', {
    sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'sent_at',
    updatedAt: false
});

Message.belongsTo(User, { as: 'sender', foreignKey: 'sender_id' });
Message.belongsTo(User, { as: 'receiver', foreignKey: 'receiver_id' });
User.hasMany(Message, { as: 'sentMessages', foreignKey: 'sender_id' });
User.hasMany(Message, { as: 'receivedMessages', foreignKey: 'receiver_id' });

module.exports = Message;