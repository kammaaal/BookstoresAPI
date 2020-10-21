const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.post('/storesInfo', (req, res) => {
    const body = req.body
    const result = db.add('storesInfo', body)
    if (!result) {
        res.status(400).send('Wrong body')
    } else {
        res.send(result)
    }
    return
})


module.exports = app