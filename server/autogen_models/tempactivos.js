/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tempactivos', {
		cidactivo: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		cen_costo: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		tableName: 'tempactivos'
	});
};
