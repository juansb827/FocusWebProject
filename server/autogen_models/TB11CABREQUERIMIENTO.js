/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11CABREQUERIMIENTO', {
		Ctipdocreq: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nnumdocreq: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Cidobra: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Prioridad: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Anulado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ncomprado: {
			type: 'BIT',
			allowNull: true
		},
		Csolicitante: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cdestino: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nvalorestimado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dfechareq: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Cdesjustifica: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: ' '
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Dfechalog: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cusuariolog: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Syscomputador: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cestadoreq: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctiposolicitud: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidfuncionario: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfecmaxentrega: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nidriesgo1: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nidriesgo2: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nidriesgo3: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nidriesgo4: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nidriesgo5: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nidriesgo6: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cobsgeneral: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		ciddireccion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ''
		}
	}, {
		tableName: 'TB11CABREQUERIMIENTO'
	});
};
