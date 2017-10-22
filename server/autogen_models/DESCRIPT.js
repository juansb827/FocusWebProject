/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DESCRIPT', {
		Xp_dconaj: {
			type: 'BIT',
			allowNull: true
		},
		Xp_obldr1: {
			type: 'BIT',
			allowNull: true
		},
		Descrip: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Xp_cossig: {
			type: 'BIT',
			allowNull: true
		},
		Xp_dcalcos: {
			type: 'BIT',
			allowNull: true
		},
		Xp_ddescri: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Xp_dinrep: {
			type: 'BIT',
			allowNull: true
		},
		Xp_dsinaj: {
			type: 'BIT',
			allowNull: true
		},
		Xp_dtmvto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Xp_dunid: {
			type: 'BIT',
			allowNull: true
		},
		Xp_dvaltot: {
			type: 'BIT',
			allowNull: true
		},
		Xp_dvaluni: {
			type: 'BIT',
			allowNull: true
		},
		Xp_esqinv: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Xp_ldesafi: {
			type: 'BIT',
			allowNull: true
		},
		Xp_oblcc: {
			type: 'BIT',
			allowNull: true
		},
		Xp_obldr2: {
			type: 'BIT',
			allowNull: true
		},
		Xp_tipdoc: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Xp_oblproy: {
			type: 'BIT',
			allowNull: false
		},
		Xp_agregariva: {
			type: 'BIT',
			allowNull: false
		}
	}, {
		tableName: 'DESCRIPT'
	});
};
