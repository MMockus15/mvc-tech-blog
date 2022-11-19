const router = require('express').Router();
const { Post, Comment, User } = require('../models');

//GET all posts for homepage with users data
router.get('/', async (req, res) => {
	try {
		const postData = await postMessage.findAll({
			include: [{ model: Comments,through: Users }],
		})
		res.status(200).json(postData);
	} catch (err) {
		res.status(500).json(err);
	}
	});

  router.get('/login', (req, res) => {
	// If the user is already logged in, redirect the request to another route
	if (req.session.logged_in) {
	  res.redirect('/');
	  return;
	}
  
	res.render('login');
  });
  
  module.exports = router;