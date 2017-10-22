/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MON_CAMB', {
		MONEDA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		MCB_VALOR: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		MCB_FECHA: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'MON_CAMB'
	});
};
