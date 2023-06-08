const router = require('express').Router();
const { User,Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:postId' ,withAuth, async (req, res) => {
  // console.log('connected to homepage route');
try {
  const postsData = await Post.findByPk(req.params.postId,{
   
  })
  // console.log(postsData);
  const soloPost = postsData.get({plain:true})
  res.render('post', {
    soloPost,
    logged_in: true,
    userId: req.session.user_id
  })
} catch (error) {
  console.log(error);
}
});


router.get('/:postId/comment' ,withAuth, async (req, res) => {
  res.render('comments');
  });

  router.post('/:postId/comment', withAuth, async (req, res) => {
    console.log('making comment');
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
        post_id: req.body.params
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });  



module.exports = router;
