const express = require('express');
const jsonParser = require('body-parser').json;
const logger = require('morgan');

const routes = require('./routes');
const app = express();
var port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(jsonParser());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/QnA');

const db = mongoose.connection;

db.on('error', (err) => {
    console.error("connection error: ",err);
});

db.once('open', () => {
    console.log("db connection successful");
});

app.use('/questions', routes);

app.use((req, res, next) => {
    var error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500); 
    res.json({
        error: {
            message: error.message
        }
    });
});
app.listen(port, () => {
    console.log("App is running on port", port);
})