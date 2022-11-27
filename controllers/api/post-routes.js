const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Post, Comment, User } = require("../../models");

//(works)
//find all posts
// realtive path = /api/post
// router.get('/', (req, res) => {
// Post.findAll({
//         attributes: ['id', 'body', 'title'],
//         include: [{
//                 model: User,
//                 attributes: ['userName'],
//             },
//         ],
//     })
//     .then((dbPostData) => res.json(dbPostData))
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

//(works)
//route that creates a new post
//relative path = /api/post/
router.post("/", withAuth,(req, res) => {
  console.log("creating");
  Post.create({
    ...req.body,
    // change to user_id: req.session.user_id
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//(works)
//finds post by id
//relative path = /api/post/:id
// router.get("/:id", (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((postData) => {
//       if (!postData) {
//         res.status(404).json({
//           message: "Post NOT found with this id",
//         });
//         return;
//       }
//       res.json(postData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

//(works)
//updating post with post:id value
//relative path = /api/post/:id
router.put("/:id", withAuth,(req, res) => {
  Post.update(
    {
      title: req.body.title,
      body: req.body.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((postData) => {
      if (!postData) {
        res.status(404).json({
          message: "Post NOT found with this id",
        });
        return;
      }
      res.json(postData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//(works)
//delete post by id
//realtive path = /api/post/:id
router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((postData) => {
      if (!postData) {
        res.status(404).json({
          message: "Post NOT found with this id",
        });
        return;
      }
      res.json(postData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
