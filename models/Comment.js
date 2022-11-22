const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model {};
Comment.init(
{
	body: {
		type: DataTypes.STRING, allowNull: false
	},
	postId: {
		type: DataTypes.INTEGER,
		references: {
			model: { tableName: 'Post' },
			key: 'id'
		},
		allowNull: false,
		onUpdate: 'cascade',
		onDelete: 'cascade'
	},
	userId: {
		type: DataTypes.INTEGER,
		references: {
			model: { tableName: 'User' },
			key: 'id'
		},
		allowNull: false,
		onUpdate: 'cascade',
		onDelete: 'cascade'
	},
},
{
	sequelize
});

module.exports = Comment;