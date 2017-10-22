/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_APPLICATION', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		APPLICATION_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		APPLICATION_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ORDER_NO: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		IS_SYSTEM: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TAB_IDS: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		PORTAL_IDS: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		OBJ_DEF_IDS: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		DESCRIPTION: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		PACKET_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INSTALL_APP_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		VERSION: {
			type: DataTypes.INTEGER,
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
		tableName: 'RB_APPLICATION'
	});
};
