// @desc    Write log url is called
// @access  Public
const logger = (req, res, next) => {
    const url = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log(url);
    next();
}

module.exports = logger;
