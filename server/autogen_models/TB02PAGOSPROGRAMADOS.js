/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB02PAGOSPROGRAMADOS', {
		Pagelecit: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Rentabilid: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Concepto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Pagelecap: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Val_rete: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ctaxpag: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Factura: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Fecha_gi: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Tipo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Val_desc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Beneficia: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Girado: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Giro: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Val_iva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Hora_gen: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Modelo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Num_cheq: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Num_item: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Nume_cpb: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Ciudad: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Oper_gen: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Fech_gen: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Banco_gi: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Fecha_cpb: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Valor: {
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
		Cctelna: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nconceptoig: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncodpais: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncoddpto: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncodciud: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Fecha_ven: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Dias_ven: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'TB02PAGOSPROGRAMADOS'
	});
};
