/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('basuracostos', {
		bodega: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		referencia: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Unidades: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		costo: {
			type: 'MONEY',
			allowNull: true
		},
		descripc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F6: {
			type: DataTypes.STRING,
			allowNull: true
		},
		REFER: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'basuracostos'
	});
};
