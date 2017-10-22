/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CATPAGOS', {
		Ccatpago: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cnombre: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nhabilitado: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'CATPAGOS'
	});
};
