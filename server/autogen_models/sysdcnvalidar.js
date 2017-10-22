/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysdcnvalidar', {
		codigo: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		expresion: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		expr_when: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		comandos: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		mensaj_err: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		descripcio: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'sysdcnvalidar'
	});
};
