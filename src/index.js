const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    return res.json({ message: 'Hello Node JS !' })
})

app.get('/bonjour', (req, res) => {
    return res.json({ message: 'Bonjour Node JS !' })
})

app.listen(3000, () => {
    console.log('Server start listening at port 3000');
})