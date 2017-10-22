/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB28GRUPOGASTO', {
		Cidgrupogasto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cdesgrupogasto: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB28GRUPOGASTO'
	});
};
