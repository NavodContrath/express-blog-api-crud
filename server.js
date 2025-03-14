const express = require('express')
const app = express()
const port = 3000
const postRouter = require('./routers/post_router')

//listening to
app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})
//middleware
app.use('/posts', postRouter)