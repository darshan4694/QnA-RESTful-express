const express = require('express');
const app = express();

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App is running on port", port);
})