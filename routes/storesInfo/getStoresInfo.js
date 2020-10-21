const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/storesInfo', (req, res) => {
    const result = db.get('storesInfo', req.query)
    res.send(result)
})


module.exports = app