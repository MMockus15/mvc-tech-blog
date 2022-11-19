const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

class User extends Model {};
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8],
			},
		}
	},
	{
		hooks: {
			beforeCreate: async (newUserData) => {
			newUserData.password = await bcrypt.hash(newUserData.password, 12);
			return newUserData;
			},
			beforeUpdate: async (updatedUserData) => {
			updatedUserData.password = await bcrypt.hash(updatedUserData.password, 12);
			return updatedUserData;
			}
		},
		sequelize,
		freezeTableName: true,
		timestamps: false,
		underscored: true,
		modelName: 'User',
	}
	);

	module.exports = User;