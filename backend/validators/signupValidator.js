// validators/signupValidator.js
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

// Define password complexity options
const complexityOptions = {
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
};

// Joi schema for user sign-up
const signupSchema = Joi.object({
    email: Joi.string().email().required(),
    password: passwordComplexity(complexityOptions).required(),
    firstname: Joi.string().required(),
    lastname: Joi.string(),
    telephone: Joi.string().required().pattern(/^[0-9]{10}$/).messages({
        'string.pattern.base': 'Telephone number must be a 10-digit number',
    }),
});

// Validator function for sign-up
const validateSignup = (data) => {
    return signupSchema.validate(data);
};

module.exports = validateSignup;
