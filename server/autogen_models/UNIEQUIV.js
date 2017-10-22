/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('UNIEQUIV', {
		REFERENCIA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		UNID_EQUIV: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		VAL_CONVRS: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NGRAMOS: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NANCHO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NLARGO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'UNIEQUIV'
	});
};
