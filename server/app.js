const express = require('express');
const app = express()

//settings
app.set('port', process.env.PORT || 4000);

//middleware


//routers
app.use('/', require('./routes/search'));
app.use('/items?search=');
app.use('/items/:id');

module.exports = app;