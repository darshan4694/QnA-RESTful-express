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
});


router.get('/:id', (req,res) => {
    res.json({
        response: "You sent a GET request for an ID : " + req.params.id
    });
});

router.get('/:qID/answers', (req, res) => {
    res.json({
        response: "You sent a GET request for all the answers of the question ID : " + req.params.qID
    });
});

router.post('/:qID/answers', (req, res) => {
    res.json({
        response: "You sent a POST request for the answer of the question ID : " + req.params.qID,
        body: req.body
    });
});

router.put('/:qID/answers/:aID', (req, res) => {
    res.json({
        response: "You sent a PUT request for the answer of the question ID : " + req.params.qID,
        questionID: req.params.qID,
        answerID: req.params.aID,
        body: req.body
    });
});

router.delete('/:qID/answers/:aID', (req, res) => {
    res.json({
        response: "You sent a DELETE request for the answer of the question ID : " + req.params.qID,
        questionID: req.params.qID,
        answerID: req.params.aID
    });
});

router.post('/:qID/answers/:aID/vote-:dir', (req, res) => {
    res.json({
        response: "You sent a POST request for vote" + req.params.dir,
        questionID: req.params.qID,
        answerID: req.params.aID,
        vote: req.params.dir
    });
});

module.exports = router;