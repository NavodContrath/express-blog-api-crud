function notFound(req, res, next) {
    res.status(404).json({
        error: "error 404",
        message: "Not found"
    })
}
module.exports = notFound