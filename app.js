const express = require('express');
const app = express();

const userRoutes = require('./api/routes/Users');


app.use('/user',userRoutes);
module.exports = app;