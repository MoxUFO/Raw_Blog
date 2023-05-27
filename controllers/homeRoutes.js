const router = require('express').Router();
const { User,Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
try {
  const postsData = await Post.findAll({
  
  })
  const posts = postsData.map((post)=> post.get({plain:true}))
  console.log(posts)
} catch (error) {
  console.log(error);
}
});



module.exports = router;
