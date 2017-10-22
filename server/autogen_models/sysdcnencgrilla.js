/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysdcnencgrilla', {
		ncodgrd: {
			type: 'NUMERIC',
			allowNull: false
		},
		cnomfrm: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		mejegrd: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		mcondcrea: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		cdescrip: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		lusuario: {
			type: 'BIT',
			allowNull: false
		}
	}, {
		tableName: 'sysdcnencgrilla'
	});
};
