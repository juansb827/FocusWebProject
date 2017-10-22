/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_RELATIONSHIP', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		RELATIONSHIP_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_DEF1_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ1_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_DEF2_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ2_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		}
	}, {
		tableName: 'RB_RELATIONSHIP'
	});
};
