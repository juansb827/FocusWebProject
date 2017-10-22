/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DES_PROV', {
		TERCERO: {
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
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'DES_PROV'
	});
};
