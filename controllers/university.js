
var University = require('../models/university');

// List of all Universities
exports.university_list = async function(req, res) {
    const universities = await University.find();
    res.send(universities);
};

// Details of a specific University
exports.university_detail = async function(req, res) {
    try {
        let result = await University.findById(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send({ error: `University with ID ${req.params.id} not found` });
    }
};

// Create a University
exports.university_create_post = async function(req, res) {
    console.log(req.body);

    let document = new University();

    document.name = req.body.name;
    document.location = req.body.location;
    document.studentCount = req.body.studentCount;

    let result = await document.save();
    res.send(result);
};

// Delete a University
exports.university_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: University delete DELETE ' + req.params.id);
};

// Update a University
exports.university_update_put = async function(req, res) {
    try {
        let toUpdate = await University.findById(req.params.id);

        if (req.body.name)
            toUpdate.name = req.body.name;

        if (req.body.location)
            toUpdate.location = req.body.location;

        if (req.body.studentCount)
            toUpdate.studentCount = req.body.studentCount;

        let result = await toUpdate.save();
        res.send(result);

    } catch (error) {
        res.status(500);
        res.send({ error: `Update for ID ${req.params.id} failed` });
    }
};


// Display all Universities using Pug
exports.university_view_all_Page = async function(req, res) {
    const universities = await University.find();

    res.render('universities', {
        title: 'University Search Results',
        results: universities
    });
};
