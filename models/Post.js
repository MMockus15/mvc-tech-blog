const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {};
Post.init(
{
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	title: DataTypes.STRING,
	body: DataTypes.STRING,
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

module.exports = Post;