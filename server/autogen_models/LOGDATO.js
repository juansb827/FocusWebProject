/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LOGDATO', {
		APLIC: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		EQUIPO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		ESTRUC: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		FECHA: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		FISICO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		LLAVEREG: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		SUCESO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		USUARIO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'LOGDATO'
	});
};
