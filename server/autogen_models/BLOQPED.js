/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BLOQPED', {
		DFECDESBLO: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		DOC_PED: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DOCUMENTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NTOTANT: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NUM_PED: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NUMERO_CPB: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		REF_VENT: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		TERCERO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CCODBLOQ: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CMAQUINA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		COBSBLOQ: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CUSUBLOQ: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CUSUDESB: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DFECBLOQ: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'BLOQPED'
	});
};
