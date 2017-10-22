/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('HOJACXP', {
		Ntotdebusd: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ini_cuota: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tipo_pago: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Tot_credit: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Valor_iva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Sucursal: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Descuentos: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Int_mora: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Val_cuota: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ciudad: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Num_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Fecha_obl: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Tot_debito: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Numero_cpb: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Mes: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Numero_obl: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ret_ica: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Otros_devo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ret_iva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Rte_devolu: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tpo_muerto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ter_obl: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_utilid: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ctipodoc: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Iva_retdev: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cod_cuenta: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ica_devol: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Iva_devolu: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Mcia_retvo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntotcreusd: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Valor_otro: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Mcia_devol: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tpo_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Devoluc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Valor_obl: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Valor_ret: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Valor_ica: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cctelna: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nconceptoig: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		Nrevisado: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'HOJACXP'
	});
};
