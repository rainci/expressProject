var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let sess = req.session;
  console.log('SESS',sess)
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/lyx', function(req, res, next) {
  res.render('index', { title: 'Express lyx' });
});
module.exports = router;
