const router = require('express').Router();
const {Post,Comment,User} = require('../models')
const withAuth = require('../utils/auth');


router.get('/' ,withAuth, async (req, res) => {
  console.log(req.params);
  res.render('comments');
  });

  router.post('/', withAuth, async (req, res) => {
    console.log('making comment');
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
        post_id: ""
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });  



module.exports = router;
