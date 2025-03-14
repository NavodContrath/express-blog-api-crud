const express = require('express')
const router = express.Router()
const posts = require('../posts')

//index
router.get('/', (req, res) => {
    res.json(posts)
})
//show
router.get('/:slug', (req, res) => {
    //find post by slug
    const foundPost = posts.find(post => post.slug === req.params.slug)
    //error handler
    if (!foundPost) {
        res.status(404).json({
            error: "404 not found",
            message: "post not found"
        })

    }
})