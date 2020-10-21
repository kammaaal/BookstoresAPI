const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/users', (req, res) => {
    const result = db.get('users', req.query)
    res.send(result)
})


module.exports = app