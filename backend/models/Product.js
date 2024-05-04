const { DataTypes } = require('sequelize');
const sequelize = require('../core/init_db');
const User = require('./User');
const Tag = require('./Tag');

const Product = sequelize.define('Product', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    images: {
        type: DataTypes.JSON
    },
    video: {
        type: DataTypes.STRING
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Product.belongsTo(User, { as: 'vendor', foreignKey: 'vendor_id' });
User.hasMany(Product, { as: 'products', foreignKey: 'vendor_id' });

// Many-to-many relationship with Tags
Product.belongsToMany(Tag, { through: 'ProductTag', foreignKey: 'product_id' });
Tag.belongsToMany(Product, { through: 'ProductTag', foreignKey: 'tag_id' });

module.exports = Product;