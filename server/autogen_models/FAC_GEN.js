/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('FAC_GEN', {
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Num_fac: {
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
		Tipfac: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Mes: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fecha_fac: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Num_anti: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Num_contr: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Trs_inv: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Vendedor: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Zona: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Num_cotiz: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tipo_pago: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ret: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Crutatrans: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Estado: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Mcia: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ctipocon: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Anticipo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Obsrem: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Ica: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Sucursal: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Num_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tipo_clien: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		P_otros_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Por_ret: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dev_docfac: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dev_numfac: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Grupo_clie: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ord_trabin: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Codi_desp: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Doc_ped: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Iva_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tpo_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_guia: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Num_orpr: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Num_ped: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Num_sapt: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Obsfac: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Otros: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tiene_anu: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ope_cre: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccodicon: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Doc_rem: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Familia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Finca: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Prc_otros: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dcto_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Iva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ord_servic: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Anticipo_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Transaccio: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dcto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Mcia_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccodtran: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ciudad: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Orden_com: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ret_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Com_entga: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Otros_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Remision: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Concepto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ord_trab: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Syscomputador: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'FAC_GEN'
	});
};
