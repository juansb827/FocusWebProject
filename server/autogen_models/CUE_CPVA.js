/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CUE_CPVA', {
		IND_CPTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		TIP_CPTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		COD_CUENTA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		COD_CPTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		INDICE: {
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
		tableName: 'CUE_CPVA'
	});
};
