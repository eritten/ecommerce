const sequelize = require('../core/init_db');
const Category = require('./category-model');
const Product = require('./product-model');
const User = require('./user-model');
const Review = require('./review-model');
const Tag = require('./tag-model');
const ProductTag = require('./product-tag-model');
const Attribute = require('./attribute-model');
const ProductAttribute = require('./product-attribute-model');

// Set up associations
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

User.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(User, { foreignKey: 'userId' });

Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'productId' });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tagId' });

Product.hasMany(Review, { foreignKey: 'productId' });
Review.belongsTo(Product, { foreignKey: 'productId' });

Product.belongsToMany(Attribute, { through: ProductAttribute, foreignKey: 'productId' });
Attribute.belongsToMany(Product, { through: ProductAttribute, foreignKey: 'attributeId' });

module.exports = {
    sequelize,
    Category,
    Product,
    User,
    Review,
    Tag,
    ProductTag,
    Attribute,
    ProductAttribute
};
