const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Post } = require("../../models");


//route that creates a new post
//relative path = /api/post/
router.post("/", withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await Post.create({ 
      title: req.body.title,
      body: req.body.body,
      userId: req.session.userId });
    res.json(newPost);
    console.log(newPost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//updating post with post:id value
//relative path = /api/post/:id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete post by id
//realtive path = /api/post/:id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
