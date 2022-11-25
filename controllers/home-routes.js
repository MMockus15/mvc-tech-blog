const router = require("express").Router();
const { Post, Comment, User } = require("../models");


//GET all posts for homepage with users data
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("all-posts-main", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});


// get single post by id
router.get("/post/:id", async (req, res) => {
try {
    const postData = await Post.findByPk(req.params.id, {
    include: [
        User,
        {
        model: Comment,
        include: [User],
        },
    ],
    });

    if (postData) {
    const post = postData.get({ plain: true });

    res.render("single-post", { post, loggedIn: req.session.loggedIn});
    } else {
    res.status(404).end();
    }
} catch (err) {
    res.status(500).json(err);
}
});

//if login is true go to homeroute 
router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
	res.redirect('/');
	return;
	}

	res.render('login');
});

//sign up page creates login otherwise redirect to home
router.get('/signup', (req, res) => {
	if (req.session.loggedIn) {
	res.redirect('/');
	return;
	}

	res.render('signup');
});

module.exports = router;
