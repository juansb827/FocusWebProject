/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('FAC_MEM', {
		DOCUMENTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NUM_FAC: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		ITEM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		MENSAJE: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		CLASE_DOC: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NANO: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'FAC_MEM'
	});
};
