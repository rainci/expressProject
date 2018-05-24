var express = require('express');
var router = express.Router();
router.use('/',require('./r_index'));
module.exports = router;