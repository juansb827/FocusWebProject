/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ATRIBUTO', {
		CODIGO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		SUBCODIGO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NOMBRE: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		ORDEN: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		REFER1: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		ESQ_INV: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		ESQ_COM: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		ESQ_ENTALM: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		NMANLOTE: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'ATRIBUTO'
	});
};
