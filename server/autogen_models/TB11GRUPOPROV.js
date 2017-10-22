/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11GRUPOPROV', {
		Descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Grupo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'TB11GRUPOPROV'
	});
};
