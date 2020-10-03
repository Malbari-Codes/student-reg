const { Router } = require('express');
const Student = require('../models/student.model');

const router = Router();

router.route('/').get((req, res) => {
  Student.find()
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { email } = req.body;
  const { contact } = req.body;
  const { address } = req.body;
  const { courseName } = req.body;

  const newStudent = new Student({
    firstName,
    lastName,
    email,
    contact,
    address,
    courseName,
  });

  newStudent.save()
    .then(() => res.json('Student added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('Student deleted!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      student.firstName = req.body.firstName;
      student.lastName = req.body.lastName;
      student.email = req.body.email;
      student.contact = req.body.contact;
      student.address = req.body.address;
      student.courseName = req.body.courseName;

      student.save()
        .then(() => res.json('Student updated!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })

    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
