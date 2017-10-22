/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DES_UNID', {
		REFERENCIA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		DESCTO: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		NUM_ITEM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		CANT_INI: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CANT_FIN: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'DES_UNID'
	});
};
