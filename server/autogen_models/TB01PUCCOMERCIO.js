/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB01PUCCOMERCIO', {
		Nitem: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Cidcuenta: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cnombrecuenta: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: ' '
		},
		Ccptoexogena: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: ' '
		},
		Cformatoexogena: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cnaplica: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nanexo: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'TB01PUCCOMERCIO'
	});
};
