/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB03SESTADOS', {
		Cdescripconesta: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cestadoactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'TB03SESTADOS'
	});
};
