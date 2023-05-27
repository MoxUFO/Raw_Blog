const { Post } = require('../models');

const postData = [
  {
    post_title: 'Test Post 1',
    post_text: 'this is pretty dope if it works',
    user_id: 2,
  },
  {
    post_title: 'Test Post 2',
    post_text: 'I hope it does!',
    user_id: 1,
  },
  {
    post_title: 'Test Post 3 ',
    post_text: 'Fingers Crossed!',
    user_id: 3,
  }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
