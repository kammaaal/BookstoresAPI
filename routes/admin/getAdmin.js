const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/admin', (req, res) => {
    const result = db.get('admin', req.query)
    res.send(result)
})


module.exports = app