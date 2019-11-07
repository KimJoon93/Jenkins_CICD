var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Joon Joon Express App deb' });
});

/* GET DB. */
router.get('/mysql', function(req, res, next) {
  res.render('index', { title: 'MYSQL DB' });
});

/* GET login. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'login Page' });
});

module.exports = router;
