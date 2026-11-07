
var express = require('express');
var router = express.Router();

/* GET university search results page. */
router.get('/', function(req, res, next) {
  res.render('universities', {
    title: 'Search Results - Universities'
  });
});

module.exports = router;
