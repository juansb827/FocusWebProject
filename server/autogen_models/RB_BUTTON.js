/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_BUTTON', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		BUTTON_ID: {
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
		DISPLAY_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		BUTTON_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		BUTTON_SCRIPT: {
			type: DataTypes.TEXT,
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
		tableName: 'RB_BUTTON'
	});
};
