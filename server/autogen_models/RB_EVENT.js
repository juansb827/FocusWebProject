/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_EVENT', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		EVENT_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		EVENT_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		EVENT_TIME: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		IS_RECURSIVE: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		NUM_RECURSIONS: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		CREATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'RB_EVENT'
	});
};
