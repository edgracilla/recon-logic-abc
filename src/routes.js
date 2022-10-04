const express = require('express');

const v1Routes = require('./v1/routes');
const v2Routes = require('./v1/routes');

const rootRoute = express.Router();

rootRoute.use('/v1', v1Routes);
rootRoute.use('/v2', v2Routes);

module.exports = rootRoute;
