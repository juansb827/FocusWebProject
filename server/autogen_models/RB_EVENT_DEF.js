/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_EVENT_DEF', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		EVENT_DEF_ID: {
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
		EVENT_DEF_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		CONFIG_ID: {
			type: DataTypes.STRING,
			allowNull: false
		},
		COND_EXPR: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ON_WHAT: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		RELATIVE_TO: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		DELAY: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		TEMPLATE_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		CHANGE_FIELD_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		IS_DEPLOYED: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
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
		tableName: 'RB_EVENT_DEF'
	});
};
