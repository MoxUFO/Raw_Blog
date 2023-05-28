const router = require('express').Router();
const { User,Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/' ,withAuth, async (req, res) => {
  // console.log('connected to homepage route');
try {
  const postsData = await Post.findAll({
  
  })
  const posts = postsData.map((post)=> post.get({plain:true}))
  res.render('dashboard', {
    posts,
    logged_in: true
  })
} catch (error) {
  console.log(error);
}
});



module.exports = router;
