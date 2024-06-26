const { sequelize } = require('./models/associations');

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database tables synced successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Error syncing database tables:', error);
        process.exit(1);
    }
})();
