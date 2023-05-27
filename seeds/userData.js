const { User } = require('../models');

const userData = [
  {
    username: 'username 1',
    email: 'user1@email.com',
    password: 'username1'
  },
  {
    username: 'username 2',
    email: 'user2@email.com',
    password: 'username2'
  },
  {
    username: 'username 3',
    email: 'user3@email.com',
    password: 'username3'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
