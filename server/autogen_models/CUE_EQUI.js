/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CUE_EQUI', {
		NANO: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		NUM_ITEM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		CTA_INI: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CTA_FIN: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		TER_INI: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		TER_FIN: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CTAI_A: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CTAF_A: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DESACTIVAR: {
			type: 'BIT',
			allowNull: false
		},
		SALDO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		LACU: {
			type: 'BIT',
			allowNull: false
		},
		LASU: {
			type: 'BIT',
			allowNull: false
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'CUE_EQUI'
	});
};
