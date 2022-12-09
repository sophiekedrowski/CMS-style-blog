const Users = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');


//associations
Users.hasMany(Posts, {
  foreignKey: 'user_id',
});

Posts.hasMany(Comments, {
  foreignKey: 'user_id',
});

Posts.belongsTo(Users, {
  foreignKey: 'user_id'
});


Comments.belongsTo(Users, {
  foreignKey: 'user_id'
});

Comments.belongsTo(Posts, {
  foreignKey: 'post_id'
});

Users.hasMany(Comments, {
  foreignKey: 'user_id',
});

module.exports = { Users, Posts, Comments };
