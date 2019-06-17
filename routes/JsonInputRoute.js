const express = require('express');
const JsonRoute = require('../controllers/JsonInputRoute');

const router = express.Router();

router.post('/', (req, res, next) => {
    JsonRoute(req, res, next);
});
module.exports = router;



