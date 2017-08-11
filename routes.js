const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({
        response: "You sent a GET request"
    });
});

router.post('/', (req,res) => {
    res.json({
        response: "You sent a POST request",
        body: req.body
    });
})


router.get('/:id', (req,res) => {
    res.json({
        response: "You sent a GET request for an ID : " + req.params.id
    });
})

module.exports = router;