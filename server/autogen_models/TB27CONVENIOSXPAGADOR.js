/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB27CONVENIOSXPAGADOR', {
		Cnitpagador: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cidconvenio: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Dfechainicial: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechafinal: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nestado: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Creferencia1: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Creferencia2: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cdescripcion: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cusuariolog: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechalog: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Syscomputador: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB27CONVENIOSXPAGADOR'
	});
};
