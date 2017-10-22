/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BAN_TRAN', {
		BCO_CODIGO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		TRANSACCIO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		DOCUMENTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NATURALEZA: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		COLUMNA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NUM_ITEM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		BAN_TRAN: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'BAN_TRAN'
	});
};
