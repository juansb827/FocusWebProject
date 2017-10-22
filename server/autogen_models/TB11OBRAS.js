/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11OBRAS', {
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cidobra: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cdesobra: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB11OBRAS'
	});
};
