/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DETMOV28', {
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Numero_cpb: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Num_item: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Cod_cuenta: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidgrupogasto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidrecurso: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nnatmov: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nvalor: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dfechamov: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechavence: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cdescripcion: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nestado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
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
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Cdocrefer: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nnumrefer: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalrefer: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Noperacion: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'DETMOV28'
	});
};
