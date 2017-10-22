/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PED_GEN', {
		Tpo_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Vendedor: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Crutatrans: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Iva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Orden_com: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tipo_pago: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Anticipo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Anticipo_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tipo_clien: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Concepto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dcto_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Doc_ped: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Zona: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Estado: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fecha: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Fecha_entr: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Dcto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Finca: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Grupo_clie: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ica: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Iva_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Mcia: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Mcia_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Mes: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Num_cot: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_ped: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Obsrem: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ope_cre: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Otros: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Otros_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
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
		Ciudad: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cnomcte: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Codi_desp: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ret: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ret_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Sucursal: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tipfac: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Prc_otros: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Npedtipo: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'PED_GEN'
	});
};
