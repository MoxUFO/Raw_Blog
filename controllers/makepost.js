const router = require('express').Router();
const {Post} = require('../models')
const withAuth = require('../utils/auth');


router.get('/' ,withAuth, async (req, res) => {
  console.log(req);
  res.render('makepost');
  });

  router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });  



module.exports = router;
