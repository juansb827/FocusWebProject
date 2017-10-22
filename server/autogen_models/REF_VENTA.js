/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('REF_VENTA', {
		REFERENCIA: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		REF_VENT: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		REF_ALIAS: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		DESCRIPCIO: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		REF_FECHCR: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		REF_TERMIN: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		TIPO_RETE: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		REF_DIGSNI: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		REF_NIVEL: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		IVA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		FIJO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		RET: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		UNIDAD: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		MONEDA: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		MODELO: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		CALIDAD: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		COLORES: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		GRUPO: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		LINEA: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		OTROS_IMP: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CANT_MIN: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		ESQ_VTA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		ESQ_DEV: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		COLREP: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NMANIVA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		REPORTA: {
			type: 'BIT',
			allowNull: false
		},
		NUM_LISTA: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'REF_VENTA'
	});
};
