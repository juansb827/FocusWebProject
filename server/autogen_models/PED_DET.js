/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PED_DET', {
		DOCUMENTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		NUM_COT: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: ' '
		},
		FECHA: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		DESCRIPCIO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		TERCERO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CEN_UTILID: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CEN_COSTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		REF_VENT: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		NUM_ITEM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		PRECIO_LIS: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CANTIDAD: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VAL_UNIT: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		IVA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DESCUENTO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		TOTAL: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		TMVTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		REFER1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		REFERENCIA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DESCRIP: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DESCUENTO1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DESCUENTO2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		BODEGA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DSCTO_M: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DSCTO1_M: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DSCTO2_M: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DSCTO3_M: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		BAS_CAMBIO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		MONEDA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		PRC_DTO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		PRC_DTO1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		PRC_DTO2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		PRC_IVA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DESCUENTO3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		OTROS_IMP: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CANTIDAD2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		OTRO_VAL1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		OTRO_VAL2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		RETENCION: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		PRC_DTO3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		MES: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CANTIDAD3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		UNIDAD: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		ANULADO: {
			type: 'BIT',
			allowNull: false
		},
		NANO: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		TOTAL_M: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VAL_UNIT_M: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		OTROS_US: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DCTOXVOL: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VALXVOL: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DOC_PED: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NUM_PED: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		UNI_REM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		UNI_FAC: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CCODBLOQ: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DFECBLOQ: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		DFECDESBLO: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		COBSBLOQ: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'PED_DET'
	});
};
