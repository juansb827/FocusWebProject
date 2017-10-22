/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('INV_FISI', {
		Cos_promsa: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Existencia: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		M_estado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_item: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Corigen: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Boleta: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Conteos1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Conteos2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cos_promed: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Conteos3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'INV_FISI'
	});
};
