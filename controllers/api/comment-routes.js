const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//(empty array)
//get all comments
//realtive path = api/comments/
router.get("/", (req, res) => {
    Comment.findAll()
        .then((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//(pulls up all posts)
//add comment
//realtive path = api/comments/
router.post('/', (req, res) => {
    if (req.session) {
        Comment.create({
                body: req.body.body,
                postId: req.body.postId,
                userId: req.session.userId
            })
            .then(commentData => res.json(commentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

module.exports = router;
