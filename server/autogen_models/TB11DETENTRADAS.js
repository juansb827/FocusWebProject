/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11DETENTRADAS', {
		Ctipdocent: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nnumdocent: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Ctipdocorden: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nnumdocorden: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Num_item: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Nvalorcosto: {
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
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Dfechavtolote: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nunidadesdes: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalorotros1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nunidades: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dfechaent: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Nvaliva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Medida: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvalorotros2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ltotpar: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Descriptor: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nvaldescuento: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ccodlote: {
			type: DataTypes.CHAR,
			allowNull: false,
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
		Ncostounitario: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cestlote: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nporiva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncostototal: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'TB11DETENTRADAS'
	});
};
