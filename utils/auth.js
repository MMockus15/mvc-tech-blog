const withAuth = (req, res, next) => {
	if (!req.session.userId) {
	res.redirect("/login");
	} else {
	next();
	}
	// req.session.userId = 1;
	// next()
};

module.exports = withAuth;