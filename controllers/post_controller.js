const posts = require('../posts')

//index
function index(req, res) {
    res.json(posts)
}
//show
function show(req, res) {
    //find post by slug
    const foundPost = posts.find(post => post.slug === req.params.slug)
    //error handler
    if (!foundPost) {
        return res.status(404).json({
            error: "404 not found",
            message: "post not found"
        })
    }
    //return post
    res.json(foundPost)
}
//store
function store(req, res) {
    res.send('add a new post')
}
//update
function update(req, res) {
    res.send(`update post with slug:${req.params.slug}`)
}
//modify
function modify(req, res) {
    res.send(`modify post with slug:${req.params.slug}`)
}
//destroy
function destroy(req, res) {
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
}
module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}