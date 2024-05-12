const signupRouter = require('../routers/users/signup');
const loginRouter = require('../routers/users/login');
const changeTelephoneRouter = require('../routers/users/changeTelephone');
const changePasswordRouter = require('../routers/users/changePassword');
const deleteAccountRouter = require('../routers/users/deleteAccount');
const passwordResetRouter = require('../routers/users/resetPassword');
const verifySignupCodeRouter = require('../routers/users/verifySignupCode');
const changeResetPasswordRouter = require('../routers/users/changeResetPassword');

function initRouters(app) {
    app.use('/users', signupRouter);
    app.use('/users', loginRouter);
    app.use('/users', changeTelephoneRouter);
    app.use('/users', changePasswordRouter);
    app.use('/users', deleteAccountRouter);
    app.use('/users', passwordResetRouter);
    app.use('/users', verifySignupCodeRouter);
    app.use('/users', changeResetPasswordRouter);
}

module.exports = initRouters;
