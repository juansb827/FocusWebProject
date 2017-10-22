/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_SYS_RELS', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SYS_REL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ1_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ2_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ORDER_NO: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		EXTRA_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		}
	}, {
		tableName: 'RB_SYS_RELS'
	});
};
