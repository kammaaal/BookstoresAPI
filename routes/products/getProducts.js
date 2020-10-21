const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/products', (req, res) => {
    const result = db.get('products', req.query)
    res.send(result)
})


module.exports = app