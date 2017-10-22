/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Tasks', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Users',
				key: 'id'
			}
		}
	}, {
		tableName: 'Tasks'
	});
};
