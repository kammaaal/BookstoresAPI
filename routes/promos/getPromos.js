const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/promos', (req, res) => {
    const result = db.get('promos', req.query)
    res.send(result)
})


module.exports = app