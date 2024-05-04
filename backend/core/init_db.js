const { Sequelize } = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(
    config.get('DB_NAME'),
    config.get('DB_USER'),
    config.get('DB_PASSWORD'),
    {
        host: config.get('DB_HOST'),
        dialect: config.get('DB_DIALECT'), logging: false
    }
);

module.exports = sequelize;