module.exports = function (res, req, next) {
	// res.locals.isAuth = req.session.isAuthenticated
	console.log(req.session)
	next()
}