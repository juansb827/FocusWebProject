/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB03CATEGORIAS', {
		Ccategoactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cdescripcioncat: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB03CATEGORIAS'
	});
};
