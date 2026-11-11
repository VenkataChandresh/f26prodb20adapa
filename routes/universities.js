
var express = require('express');
var router = express.Router();

const university_controller = require('../controllers/university');
/* GET university search results page. */
router.get('/', university_controller.university_view_all_Page);
module.exports = router;
