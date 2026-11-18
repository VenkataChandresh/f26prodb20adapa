
var express = require('express');
var router = express.Router();

const university_controller = require('../controllers/university');
/* GET university search results page. */
router.get('/', university_controller.university_view_all_Page);
router.get('/detail', university_controller.university_view_one_Page);
router.get('/create', university_controller.university_create_Page);
module.exports = router;
