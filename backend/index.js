const express = require('express');
const config = require('config');

const app = express();
app.use(express.json());
require('./startup/initRouters')(app);
const server_port = config.get('server_port');
app.listen(server_port, () => console.log(`running server on port ${server_port}`));
module.exports = app;