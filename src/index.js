const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const users = [
    {
        name: 'Aycer',
        age: 24
    },
    {
        name: 'Wassim',
        age: 24
    },
    {
        name: 'Wael',
        age: 26
    }


]

app.get('/hello', (req, res) => {
    return res.json({ message: 'Hello Node JS !' })
})

app.get('/users', (req, res) => {
    return res.json(users)
})
app.post('/user', (req, res) => {
    const user = req.body
    users.push(user)
    return res.json(user)
})

app.listen(3000, () => {
    console.log('Server start listening at port 3000');
})