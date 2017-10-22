/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11DIRENTREGAS', {
		Cdetalledir: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ciddireccion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB11DIRENTREGAS'
	});
};
