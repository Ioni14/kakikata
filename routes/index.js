var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {});
});

router.get('/kanas', function(req, res) {
	res.render('kanas', {});
});

router.get('/quiz', function(req, res) {
    res.render('quiz', {});
});

module.exports = router;
