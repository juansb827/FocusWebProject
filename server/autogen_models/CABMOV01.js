/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CABMOV01', {
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
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Num_ori: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Oper_crea: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Mge_concpb: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Observa: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cmoneda: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfecha: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Doc_ori: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fecha_crea: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Fecha_uact: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Mes: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Mge_lote: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Bco_codigo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cheque: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ciudad_gir: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Oper_uact: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Aplica_cre: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Attach: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
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
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		nniif: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		crevelaciones: {
			type: DataTypes.TEXT,
			allowNull: false,
			defaultValue: ''
		}
	}, {
		tableName: 'CABMOV01'
	});
};
