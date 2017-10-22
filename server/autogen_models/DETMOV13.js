/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DETMOV13', {
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
		Docref1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Docref2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fecha: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Fecha_sis: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Hora: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Hv_codigo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ccodlote: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Traslado: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dfechavtolote: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cost_unid: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cost_unsa: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Can_eq: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cdocref3: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cen_utilid: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cnumpoli: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Costo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Identifica: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Un_prc: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Concepto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Costosa: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Descriptor: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Recalculo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Unidades: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Val_eq: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Nnatmov: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nordenpro: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nordencom: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cdocordcom: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Un_eq: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Base: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cestlote: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnumref3: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cost_eq: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Mde_tmvto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Mes: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nuniaju: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Familiainv: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Lineainv: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Grupoinv: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CNUMREFER4: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		},
		NTIPAJU: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		cnumrefer5: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ''
		},
		Cidrecurso: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ''
		},
		Nniif: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'DETMOV13'
	});
};
