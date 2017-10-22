/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MONEDAS', {
		MONEDA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		MON_NOMBRE: {
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
		tableName: 'MONEDAS'
	});
};
