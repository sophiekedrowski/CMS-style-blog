const seedPosts = require('./post-seed');
const seedComments = require('./comment-seed');
const seedUsers = require('./user-seed');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- TAGS SEEDED -----\n');


  await seedPosts();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedComments();
  console.log('\n----- PRODUCTS SEEDED -----\n');



  process.exit(0);
};

seedAll();