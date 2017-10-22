/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11DETREQUERIMIENTO', {
		Ctipdocreq: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nnumdocreq: {
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
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Dfechareq: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Descripcion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Medida: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Bodega: {
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
		Ccapitulo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cinsumo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Citem: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cobra: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nunidadesreq: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nunidadesord: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dfechaobra: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cobservacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB11DETREQUERIMIENTO'
	});
};
