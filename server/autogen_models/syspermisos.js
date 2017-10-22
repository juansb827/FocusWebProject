/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('syspermisos', {
		Ntipo: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Nclase: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Naplicacion: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Nopcion: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Nusuario: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Npermiso: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Dfechalog: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'syspermisos'
	});
};
