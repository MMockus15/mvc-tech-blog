const router = require('express').Router();
const { User } = require('../../models');

//create user route
//relative path = /api/users
router.post('/', async (req, res) => {
	try {
	const userData = await User.create({
		userName: req.body.userName,
		password: req.body.password,
	});
		console.log(userData);
	req.session.save(() => {
		req.session.id = userData.id;
		req.session.userName = userData.userName;
		req.session.loggedIn = true;

		res.status(200).json(userData);
	});
	} catch (err) {
	res.status(400).json(err);
	}
});

//route to log in existing user
//realtive path = /api/users/login
router.post('/login', async (req, res) => {
	try {
	const userData = await User.findOne({ where: { userName: req.body.userName } });
		console.log(userData);
		console.log(req.body);
	if (!userData) {
		res
		.status(400)
		.json({ message: 'Incorrect username or password, please try again' });
		return;
	}

	const validPassword = await userData.checkpassword(req.body.password);
console.log(validPassword);
	if (!validPassword) {
		res
		.status(400)
		.json({ message: 'Incorrect password, please try again' });
		return;
	}

	req.session.save(() => {
		req.session.id = userData.id;
		req.session.userName = userData.userName;
		req.session.loggedIn = true;
		
		res.json({ user: userData, message: 'You are now logged in!' });
	});

	} catch (err) {
		console.log(err);
	res.status(400).json(err);
	}
});

//log out logged in user
//realtive path = /api/users/logout
router.post('/logout', (req, res) => {
	if (req.session.loggedIn) {
	req.session.destroy(() => {
		res.status(204).end();
		console.log("you are logged out!");
	});
	} else {
	res.status(404).end();
	}
});

module.exports = router;