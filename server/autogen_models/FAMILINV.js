/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('FAMILINV', {
		Familia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nombre: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nemonicofam: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cprefijocontab: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nmanlote: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nunddefault: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nprecioconiva: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'FAMILINV'
	});
};
