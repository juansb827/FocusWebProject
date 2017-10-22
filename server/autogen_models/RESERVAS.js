/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RESERVAS', {
		NVALANTI: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NCIA: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		CNUMRECIBO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: ' '
		},
		DFECFAC: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		BODEGA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NUM_ITEM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CTERCERO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		FACTURADAS: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CNUMFACTU: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: ' '
		},
		DFECHA: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		REFERENCIA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		UNIDADES: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CNUMCOTIZA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'RESERVAS'
	});
};
