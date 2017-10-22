/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DSCTOVOL', {
		CANT_FIN: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CANT_INI: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DESCTO: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		NUM_ITEM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		REFERENCIA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'DSCTOVOL'
	});
};
