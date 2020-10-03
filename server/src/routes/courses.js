const { Router } = require('express');
const Course = require('../models/course.model');

const router = Router();

router.route('/').get((req, res) => {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { courseName } = req.body;
  const { description } = req.body;

  const newCourse = new Course({
    courseName,
    description,
  });

  newCourse.save()
    .then(() => res.json('Course Added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Course.findById(req.params.id)
    .then((course) => res.json(course))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then(() => res.json('Course deleted!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  Course.findById(req.params.body)
    .then((course) => {
      course.courseName = req.body.courseName;
      course.description = req.body.description;

      course.save()
        .then(() => res.json('Course updated!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })

    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
