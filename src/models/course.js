const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: String,
    discreption: Number,

})

const CourseModel = mongoose.model('course', courseSchema)

exports.default = CourseModel