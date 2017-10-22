/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11CABFACTURAS', {
		Ctipdocfac: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nnumdocfac: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Dfechafac: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Cobservacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cremisionprov: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nvalanticipo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nnumdocreq: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cfacturaprov: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nvalretica: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalretiva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalret: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cformapago: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nvaltotal: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Notrosanticipos: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvaldescuento: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cgrupdoc: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipdocreq: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_utilid: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ndirecta: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Noblentra: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nvalmercancia: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccodrtica: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccodruta: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nnumdocorden: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Proveedor: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nvaliva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dfechacontab: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nordruta: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_ope: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ngensal: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Anulado: {
			type: 'BIT',
			allowNull: true
		},
		Numero_cpb: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalotros: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ccodgru: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nplazodias: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Docum_ope: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipdocorden: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dfechalog: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cusuariolog: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Syscomputador: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nvalretencion: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ctipdocent: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nnumdocent: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntasamoneda: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cmoneda: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB11CABFACTURAS'
	});
};
