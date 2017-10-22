/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBREFFIJAS', {
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cdescripcion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TBREFFIJAS'
	});
};
