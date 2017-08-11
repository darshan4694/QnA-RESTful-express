const express = require('express');
const jsonParser = require('body-parser').json;
const logger = require('morgan');

const routes = require('./routes');
const app = express();
var port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(jsonParser());

app.use('/questions', routes);
app.listen(port, () => {
    console.log("App is running on port", port);
})