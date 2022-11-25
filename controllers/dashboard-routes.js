const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");

//for individual user GET all posts
//realtive path = /dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("all-posts-dashboard", {
      layout: "dashboard",
      posts, loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.redirect("login");
  }
});

//render form to create new post
//realtive path = /dashboard/add
router.get("/add", withAuth, (req, res) => {
  res.render("add-post", {
    loggedIn: req.session.loggedIn,
  });
});

//render form to edit users post by id
//realtive path = dashboard/update/:id
router.get("/update/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("update-post", {
        layout: "dashboard",
        post, loggedIn: req.session.loggedIn
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
