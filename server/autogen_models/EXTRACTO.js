/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EXTRACTO', {
		ANO_MES: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		BCO_CODIGO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		DOCUMENTO: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		TRANSACCIO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		FECHA: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		VALOR: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		COMPROBAN: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		ESTADOCON: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		ESTADOEXT: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		DOCREFE1: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		NATURALEZA: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		NUM_ITEM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		ESTADOMOV: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		ORDEN: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		COLUMNA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DOCREFE2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CHE1: {
			type: 'BIT',
			allowNull: true
		},
		CHE2: {
			type: 'BIT',
			allowNull: true
		},
		CHE3: {
			type: 'BIT',
			allowNull: true
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'EXTRACTO'
	});
};
