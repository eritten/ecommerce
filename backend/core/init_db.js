const { Sequelize } = require('sequelize');
const config = require('config');

// Extracting database URL from the configuration
const databaseUrl = config.get('DATABASE_URL');

// Creating Sequelize instance with the provided database URL
const sequelize = new Sequelize(databaseUrl, {
    dialect: 'postgres', // 'postgres' for PostgreSQL
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // This is needed if your PostgreSQL server requires SSL
        }
    },
    logging: false // Disabling logging for production
});

module.exports = sequelize;
