/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('HOJACXC', {
		DOCUMENTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		COD_CUENTA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		TERCERO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NUMERO_OBL: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CEN_UTILID: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		SUB_UTILID: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CEN_COSTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		SUB_COSTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		FECHA_OBL: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		NUM_CUOTAS: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		TPO_CUOTAS: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		TPO_MUERTO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VAL_CUOTA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DESCUENTOS: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		INT_MORA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		INI_CUOTA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		IVA_DEVOLU: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VALOR_OTRO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		RTE_DEVOLU: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DEVOLU: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VALOR_OBL: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VALOR_RET: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VALOR_IVA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		TOT_CREDIT: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		TOT_DEBITO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VENDEDOR: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		ZONA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CIUDAD: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		GRUPO_CLIE: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		TIPO_CLIEN: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		SUCURSAL: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		TIPO_PAGO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		MCIA_US: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		ICA_DEVOL: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		OTROS_DEV: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VALOR_ICA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		RET_IVA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		MES: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		NUMERO_CPB: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CODJUR: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		FECJUR: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		OBSJUR: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		NANO: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '(datepart(year,getdate()))'
		},
		NTOTDEBUSD: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NTOTCREUSD: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'HOJACXC'
	});
};
