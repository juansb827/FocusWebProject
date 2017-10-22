/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB03GRUPOS', {
		Cgrupoactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cdescripciongru: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvidautil: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB03GRUPOS'
	});
};
