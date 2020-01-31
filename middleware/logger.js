function logRequestMethodAndPath(req, res, next) {
    console.log(`${req.method} ${req.path}`);
    next();
}

module.exports = logRequestMethodAndPath;
