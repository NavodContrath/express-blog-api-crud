function serverError(err, req, res, next) {
    res.status(500).json({
        error: "500 Server error",
        message: err.message
    })
}
module.exports = serverError