/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CONCEPTO', {
		COD_CONC: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CCP_CONC: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'CONCEPTO'
	});
};
