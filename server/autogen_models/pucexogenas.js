/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pucexogenas', {
		nitem: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		cidcuenta: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cnombre: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Concepto: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Formato: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		NA: {
			type: DataTypes.STRING,
			allowNull: true
		},
		nanexo: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		tableName: 'pucexogenas'
	});
};
