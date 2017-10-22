/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DTOSCXP', {
		COD_CUENTA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NUMERO_OBL: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		DIAS_ANTES: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		POR_DESCUE: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		TERCERO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		MES: {
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
		tableName: 'DTOSCXP'
	});
};
