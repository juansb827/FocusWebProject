/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11MODELOSFAC', {
		Atributo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nreqalm: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cclacon: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Descripcion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ctipdoc: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Forma: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Parametro: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tmvto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cidmodelo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'TB11MODELOSFAC'
	});
};
