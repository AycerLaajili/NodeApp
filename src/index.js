const express = require('express')
const mongoose = require('mongoose')

const UserModel = require('./models/User').default
const CourseModel = require('./models/Course').default

// configuration
const app = express()
app.use(express.urlencoded({ extended: false }))

const mongodbURI = 'mongodb://localhost:27017/gomycode'

mongoose.connect(mongodbURI, {
    useNewUrIParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error)
        console.log(error)
    else
        console.log('database connected ---------<')
})



///////////////////////////////////////////////////////////////////////////////////////////
// implementation
app.get('/hello', (req, res) => {
    return res.json({ message: 'Hello Node JS !' })
})

app.get('/users', async (req, res) => {
    // get users data from database
    const usersData = await UserModel.find()

    // send response
    return res.json(usersData)
})

app.post('/user', async (req, res) => {
    // get data from request 
    const userData = req.body

    // saving data to database
    await UserModel.create(userData)

    // send response
    return res.json(userData)
})

// course
app.get('/course', async (req, res) => {
    const coursesList = await CourseModel.find()
    return res.json(coursesList)
})

app.post('/course', async (req, res) => {
    const courseData = req.body
    await CourseModel.create(courseData)
    return res.json(courseData)
})

app.put('/course/:id', async (req, res) => {
    await CourseModel.updateOne({ _id: req.params.id }, { title: req.body.title })
    return res.json({ success: true })
})

app.delete('/course/:id', async (req, res) => {
    await CourseModel.remove({ _id: req.params.id })
    return res.json({ success: true })
})

app.listen(3000, () => {
    console.log('Server start listening at port 3000');
})