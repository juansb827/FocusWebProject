/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB01DETCAUSACIONES', {
		Numero_cpb: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Dfechacausa: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Vica: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccodriva: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Sucursal: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		N_valref: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Vriva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Vdto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccodrtfu: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Consignar: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		N_pdto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Anulado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Refer1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tipfac: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		C_grpter: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipopago: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnumtb: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Entidad: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdoctb: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Ccodrtica: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		N_piva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ter_obl: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Viva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nconceptoig: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Vrte: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Valor_pes: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cconcepto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnumrefer: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_utilid: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Refer2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nplazodias: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Moneda: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Valor_usd: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Zona: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Num_item: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Caja: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Refer3: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Tasa: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Refer4: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
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
		Cctelna: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nnumrecalada: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ncontenedores40: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncontenedores20: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cfaclegaliza: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nvaloriva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cciudaddestino: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nvalorbase: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nporbase: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cretpernatural: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccostolegaliza: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdesclegaliza: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nporratear: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'TB01DETCAUSACIONES'
	});
};
