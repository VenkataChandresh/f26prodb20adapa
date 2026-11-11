
var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var university_controller = require('../controllers/university');

// API ROUTE
router.get('/', api_controller.api);

// UNIVERSITY ROUTES
router.post('/universities', university_controller.university_create_post);
router.delete('/universities/:id', university_controller.university_delete);
router.put('/universities/:id', university_controller.university_update_put);
router.get('/universities/:id', university_controller.university_detail);
router.get('/universities', university_controller.university_list);

module.exports = router;
