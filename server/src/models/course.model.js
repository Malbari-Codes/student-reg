const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = new Schema({
  courseName: {
    type: String,
    unique: true,
  },
  description: String,
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
