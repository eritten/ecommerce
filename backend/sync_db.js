// sync_db.js
const sequelize = require('./core/init_db');
const User = require('./models/User');
const Product = require('./models/Product');
const Message = require('./models/Message');
const Review = require('./models/Review');
const Tag = require('./models/Tag');
const ProductTag = require('./models/ProductTag');

(async () => {
    try {
        await sequelize.sync({ force: false }); // Set force to true to drop existing tables
        console.log('Database tables synced successfully.');
        process.exit(0); // Exit with success code
    } catch (error) {
        console.error('Error syncing database tables:', error);
        process.exit(1); // Exit with error code
    }
})();
