const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/warehouse', (req, res) => {
    const result = db.get('warehouse', req.query)
    res.send(result)
})


module.exports = app