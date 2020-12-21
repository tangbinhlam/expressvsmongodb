const errorHandler = (err, req, res, next) => {
    // Log
    console.log(err.stack.red);
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({
        success: false,
        error: err.message,
    })
}

module.exports = errorHandler
