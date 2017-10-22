/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EXCE_REF', {
		POR_DESC: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		PRECIO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		REF_VENT: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		TERCERO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'EXCE_REF'
	});
};
