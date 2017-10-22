/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB03DETMOV', {
		Ctipdoc: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nnumdoc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_utilid: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cidactivo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cconcepto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ndias: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cnumrefer1: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ntasa: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Num_item: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Coperacion: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvalorloc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalorusd: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Dfechamov: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Nsigno: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Cserialactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cplacauno: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidcedula: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Creferactivo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cgrupoactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cclaseactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccategoactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidtransaccion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nniif: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'TB03DETMOV'
	});
};
