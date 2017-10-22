/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysdcndetgrilla', {
		ncodgrd: {
			type: 'NUMERIC',
			allowNull: false
		},
		cnomcam: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		mejegrd: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		norder: {
			type: 'NUMERIC',
			allowNull: false
		},
		cclase: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		ctipo: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		nlongitud: {
			type: 'NUMERIC',
			allowNull: false
		},
		ndecimales: {
			type: 'NUMERIC',
			allowNull: false
		},
		ltemporal: {
			type: 'BIT',
			allowNull: false
		}
	}, {
		tableName: 'sysdcndetgrilla'
	});
};
