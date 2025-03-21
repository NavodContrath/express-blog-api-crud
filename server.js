const express = require('express')
const app = express()
const port = 3000
const postRouter = require('./routers/post_router')
const serverError = require('./middlewares/errors/serverError')
const error404 = require('./middlewares/errors/error404')

//listening to
app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})
//middleware to parse the content in json
app.use(express.json())
//middleware to define routes
app.use('/posts', postRouter)
//error middlewares
app.use(serverError)
app.use(error404)