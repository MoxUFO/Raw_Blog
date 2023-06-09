const router = require('express').Router();
const { User,Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/' ,withAuth, async (req, res) => {
  console.log(req.session.user_id);
try {
  const postsData = await Post.findAll({
   where: {user_id:req.session.user_id},
   include: [
    {
      model:User,
      attributes: ['username']
    }
   ]
  })
  const posts = postsData.map((post)=> post.get({plain:true}))
  // console.log(posts);
  res.render('homepage', {
    posts,
    logged_in: true
  })
} catch (error) {
  console.log(error);
}
});



module.exports = router;
