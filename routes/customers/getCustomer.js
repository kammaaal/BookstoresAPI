const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/customers', (req, res) => {
    const result = db.get('customers', req.query)
    res.send(result)
})


module.exports = app