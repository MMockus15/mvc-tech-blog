const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


//set up relationships between models
Post.belongsTo(User, {
	foreignKey: 'userId',
	onDelete: 'cascade'
});

//set relationship between post and comment
Post.hasMany(Comment, {
	foreignKey: 'postId',
	onDelete: 'cascade'
});

//set relationship between comments and user
Comment.belongsTo(User, {
	foreignKey: 'userId',
	onDelete: 'cascade'
});


module.exports = { User, Post, Comment };