const { Comment} = require('../models');

const commentData = [
  {
    comment_text: 'Comment from user 1',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: 'Comment from user 2',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: 'Comment from user 3',
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
