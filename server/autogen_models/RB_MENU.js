/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_MENU', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		MENU_ID: {
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
			allowNull: true
		},
		ORDER_NO: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		PARENT_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		MENU_TEXT: {
			type: DataTypes.STRING,
			allowNull: false
		},
		PAGE_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SYSTEM_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		DESCRIPTION: {
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
		tableName: 'RB_MENU'
	});
};
