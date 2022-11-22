const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


//set up relationships between models
Post.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'cascade'
});

//set relationship between post and comment
Post.hasMany(Comment, {
	foreignKey: 'post_id',
	onDelete: 'cascade'
});

//set relationship between comments and user
Comment.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'cascade'
});


module.exports = { User, Post, Comment };