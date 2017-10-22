/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB13DETALLEKIT', {
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ccodinsumo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Medida: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncantidad: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'TB13DETALLEKIT'
	});
};
