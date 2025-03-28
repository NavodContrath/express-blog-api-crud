const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const postRouter = require('./routers/post_router')
const serverError = require('./middlewares/errors/serverError')
const error404 = require('./middlewares/errors/error404')


//listening to
app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})
//middleware for cors
app.use(cors({
    //define who can access it
    origin: 'http://localhost:5173'
}))
//middleware to parse the content in json
app.use(express.json())
//middleware to define routes
app.use('/posts', postRouter)
//error middlewares
app.use(serverError)
app.use(error404)