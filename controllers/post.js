const router = require('express').Router();
const { User,Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:postId' ,withAuth, async (req, res) => {
  // console.log('connected to homepage route');
try {
  const postsData = await Post.findByPk(req.params.postId,{
    include: [
      {
        model:User,
        attributes: ['username']
      }
     ]
  })
  const commentData = await Comment.findAll({
    where: { post_id : req.params.postId},
    include: [
      {
        model:User,
        attributes: ['username', 'id']
      }
     ]
  })
  const comments = commentData.map((comment) => comment.get({plain: true}))
  console.log(comments);
  // console.log(postsData);
  const soloPost = postsData.get({plain:true})
  // console.log(soloPost);
  res.render('post', {
    soloPost,
    comments,
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
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        post_id: req.params.postId
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });  



module.exports = router;
