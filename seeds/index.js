const sequelize = require('../config/connection');
const seedUser = require('../seeds/userData');
const seedPost = require('../seeds/postData');
const seedComment = require('../seeds/commentData')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');
  await seedPost();
  console.log('\n----- POST SEEDED -----\n');
  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');
  process.exit(0);
};

seedAll();
