/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TIPTAR', {
		CCODTIPTAR: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CNOMBRE: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CNIT: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		NPORRET: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NPORBAS: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NPORCOM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NPORICA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NPORIVA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CCTABAN: {
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
		tableName: 'TIPTAR'
	});
};
