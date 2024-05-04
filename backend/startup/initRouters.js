const signupRouter = require('../routers/users/signup');
const loginRouter = require('../routers/users/login');
const changeTelephoneRouter = require('../routers/users/changeTelephone');
const changePasswordRouter = require('../routers/users/changePassword');
const deleteAccountRouter = require('../routers/users/deleteAccount');

function initRouters(app) {
    app.use('/users', signupRouter);
    app.use('/users', loginRouter);
    app.use('/users', changeTelephoneRouter);
    app.use('/users', changePasswordRouter);
    app.use('/users', deleteAccountRouter);
}

module.exports = initRouters;