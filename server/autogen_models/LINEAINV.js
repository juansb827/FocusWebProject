/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LINEAINV', {
		Familia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Linea: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nombre: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		}
	}, {
		tableName: 'LINEAINV'
	});
};
