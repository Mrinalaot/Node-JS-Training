function authMiddleware(req, res, next) {
    if (req.cookies.username) {
        next();
    } else {
        res.redirect('/login');
    }
}

module.exports = authMiddleware;