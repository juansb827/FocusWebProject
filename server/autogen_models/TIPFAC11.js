/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TIPFAC11', {
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
		Descripcio: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Documento: {
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
		}
	}, {
		tableName: 'TIPFAC11'
	});
};
