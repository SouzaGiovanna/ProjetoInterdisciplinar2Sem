const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(201).send({
        title: 'Node Express API',
        version: "0.0.1"
    });
});

module.exports = router;