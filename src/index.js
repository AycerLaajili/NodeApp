const express = require('express')
const mongoose = require('mongoose')

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

const usersArray = [
    {
        name: 'Aycer',
        age: 24
    },
    {
        name: 'Wassim',
        age: 24
    }
]

app.get('/hello', (req, res) => {
    return res.json({ message: 'Hello Node JS !' })
})

app.get('/users', (req, res) => {
    return res.json(usersArray)
})

app.post('/user', (req, res) => {
    const userData = req.body
    usersArray.push(userData)
    return res.json(userData)
})

app.listen(3050, () => {
    console.log('Server start listening at port 3050');
})