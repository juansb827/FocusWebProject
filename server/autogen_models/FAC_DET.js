/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('FAC_DET', {
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
		Num_item: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Fecha_fac: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Doc_rem: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Num_rem: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Tmvto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ccodlote: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Retencion: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Doc_facdev: {
			type: DataTypes.CHAR,
			allowNull: true,
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
		Dctoxuni: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dctoxvol: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Descripcio: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Otro_val1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Otro_val2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Val_unit: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Val_unit_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Valxuni: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Valxvol: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Cant_devol: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Bas_cambio: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cantidad: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cantidad2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cantidad3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dscto1_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dscto3_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Iva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Iva_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Mes: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Moneda: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Descuento: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Total: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dscto_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Descuento1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Prc_dto2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Total_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Unidad: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Val_pago: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tiene_anu: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_facdev: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Otros_us: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Prc_dto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Prc_dto1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Prc_dto3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Prc_iva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Precio_lis: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ref_vent: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dfechavtolote: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cestlote: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nnatmov: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Dscto2_m: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tip_pago: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Otros_imp: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Refer1: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Refer2: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Descriptor: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Descuento2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Descuento3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Cobservacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
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
		Cnumrefer4: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		cnumpoli: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		}
	}, {
		tableName: 'FAC_DET'
	});
};
