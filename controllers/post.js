const router = require('express').Router();
const { User,Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:postId' ,withAuth, async (req, res) => {
  // console.log('connected to homepage route');
try {
  const postsData = await Post.findByPk(req.params.postId,{
   
  })
  console.log(postsData);
  const soloPost = postsData.get({plain:true})
  res.render('post', {
    soloPost,
    logged_in: true
  })
} catch (error) {
  console.log(error);
}
});



module.exports = router;
