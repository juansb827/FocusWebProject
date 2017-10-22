/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CIUDADES', {
		NCODPAIS: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		NCODDPTO: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		NCODCIUD: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		CNOMCIUD: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'CIUDADES'
	});
};
