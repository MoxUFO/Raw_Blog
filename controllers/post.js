const router = require('express').Router();
const { User,Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:postId' ,withAuth, async (req, res) => {
  let isCreator;
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
  const filteredComments = () => {
    for (let i = 0; i < comments.length; i++) {
      if (req.session.user_id === comments[i].user_id) {
        comments[i] = {...comments[i],isCreator:true}
      }
    }
    return comments
  }
  let allComments = filteredComments()
  // console.log(allComments);

  // console.log(isCreator);
  let soloPost = postsData.get({plain:true})
  const post = () => {
    if(req.session.user_id === soloPost.user_id){
       soloPost = {...soloPost, isCreator: true}
    }
    return soloPost
  }

  let thePost = post()
  console.log(thePost);
  res.render('post', {
    thePost,
    allComments,
    logged_in: true,
    isCreator,
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
