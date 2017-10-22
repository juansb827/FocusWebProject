/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11DETFACTURAS', {
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
		Num_item: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Cdescripcion: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nunidades: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccodlote: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccodrtfu: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ncostounitario: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Npagodiferido: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ntotfactura: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Descriptor: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvaldescuento: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ctipdocentrada: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipdocorden: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Docre1: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Docre2: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nvaliva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nitemref: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Num_ent: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nnumdocorden: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Nvalorotros1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalorotros2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalorotros3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Npordto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nporiva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Ncostototal: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nporret: {
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
		Cdescriptor: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nunitariomoneda: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntotalmoneda: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'TB11DETFACTURAS'
	});
};
