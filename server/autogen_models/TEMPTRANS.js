/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TEMPTRANS', {
		Descripcio: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Transa: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'TEMPTRANS'
	});
};
