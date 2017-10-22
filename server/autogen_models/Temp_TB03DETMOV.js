/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Temp_TB03DETMOV', {
		Ctipdoc: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Nnumdoc: {
			type: 'NUMERIC',
			allowNull: false
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Cen_utilid: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Cidactivo: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Cconcepto: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Ndias: {
			type: 'NUMERIC',
			allowNull: false
		},
		Cnumrefer1: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Ntasa: {
			type: 'NUMERIC',
			allowNull: false
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Num_item: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Coperacion: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Nvalorloc: {
			type: 'NUMERIC',
			allowNull: false
		},
		Nvalorusd: {
			type: 'NUMERIC',
			allowNull: false
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Dfechamov: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Nsigno: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Cserialactivo: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Cplacauno: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Cidcedula: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Creferactivo: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Cgrupoactivo: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Cclaseactivo: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Ccategoactivo: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Cidtransaccion: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'Temp_TB03DETMOV'
	});
};
