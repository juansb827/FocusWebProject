/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysdcnasigna', {
		ncodasig: {
			type: 'NUMERIC',
			allowNull: false
		},
		masigna: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		cdesactiva: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		cindicefrm: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		cdescrip: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		dfeccrea: {
			type: DataTypes.DATE,
			allowNull: false
		},
		dfecmod: {
			type: DataTypes.DATE,
			allowNull: false
		},
		lusuario: {
			type: 'BIT',
			allowNull: false
		},
		num_item: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'sysdcnasigna'
	});
};
