/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CONFNIVELES', {
		Ndignivel2: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ndignivel3: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ndignivel4: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cnomtabla: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nmaxlong: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nmaxnivel: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ndignivel5: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ndignivel6: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ndignivel7: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ndignivel8: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ndignivel9: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ndignivel1: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nnoniveles: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'CONFNIVELES'
	});
};
