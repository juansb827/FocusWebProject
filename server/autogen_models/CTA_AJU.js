/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CTA_AJU', {
		COD_CUENTA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		ACREDITA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DEBITA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		AJNIANT: {
			type: 'BIT',
			allowNull: false
		},
		AJSALD: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		EXCLUYE: {
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
		tableName: 'CTA_AJU'
	});
};
