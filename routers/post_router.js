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
        return res.status(404).json({
            error: "404 not found",
            message: "post not found"
        })

    }
    res.json(foundPost)
})
//store
router.post('/', (req, res) => {
    res.send('add a new post')
})
//update
router.put('/:slug', (req, res) => {
    res.send(`update post with slug:${req.params.slug}`)
})
//modify
router.patch('/:slug', (req, res) => {
    res.send(`modify post with slug:${req.params.slug}`)
})
//destroy
router.delete('/:slug', (req, res) => {
    //find post by slug
    const foundPost = posts.find(post => post.slug === req.params.slug)
    //error handler
    if (!foundPost) {
        return res.status(404).json({
            error: "404 not found",
            message: "post not found"
        })
    }
    //remove post from the array
    posts.splice(posts.indexOf(foundPost), 1)
    //log posts to verify right functioning
    console.log(posts)
    //response with no content
    res.sendStatus(204)
})

module.exports = router