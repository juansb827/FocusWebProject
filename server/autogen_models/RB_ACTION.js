/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_ACTION', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ACTION_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ORDER_NO: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		ACTION_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ACTION_TYPE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NEW_STATUS_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		IS_GROUP: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		COND_EXPR: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		PAGE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CREATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		},
		UPDATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		UPDATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'RB_ACTION'
	});
};
