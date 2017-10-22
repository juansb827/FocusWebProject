/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DETMOVPTO', {
		Cidrecurso: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cod_cuenta: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvalor: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Crangomeses: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nmeses: {
			type: DataTypes.INTEGER,
			allowNull: false
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
		},
		Cuseraprobo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfecaprobo: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nestado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Cidgrupogasto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'DETMOVPTO'
	});
};
