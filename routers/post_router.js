const express = require('express')
const router = express.Router()
const posts = require('../posts')

//index
router.get('/', (req, res) => {
    res.json(posts)
})
//show