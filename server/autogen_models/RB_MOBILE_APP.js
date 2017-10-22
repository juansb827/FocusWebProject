/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_MOBILE_APP', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		MOBILE_APP_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		MOBILE_APP_GUID: {
			type: DataTypes.STRING,
			allowNull: false
		},
		APPLICATION_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		MOBILE_APP_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		IS_SYSTEM: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		VIEW_IDS: {
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
		tableName: 'RB_MOBILE_APP'
	});
};
