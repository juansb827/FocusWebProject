/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11DETCOMPRAS', {
		Ctipdocorden: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nnumdocorden: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Nnumdocreq: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Ctipdocreq: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dfechaorden: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Ltotpar: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Cen_utilid: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ccoditem: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nunidadesord: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nunidadesrec: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nvaldescuento: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nunidadesdes: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvaloriva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Medida: {
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
		Cidobra: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvalotros1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalotros2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalotros3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nunidadespen: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccapitulo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ncostounitario: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cdescripcion: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cnumdocre1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnumdocre2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nfacturado: {
			type: 'BIT',
			allowNull: true
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ccodinsumo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncostototal: {
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
		Npordto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nunidadesfac: {
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
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB11DETCOMPRAS'
	});
};
