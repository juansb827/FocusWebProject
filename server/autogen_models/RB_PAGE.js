/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_PAGE', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PAGE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PAGE_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		IS_BASE_VERSION: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_LOGIN_ONLY: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		PAGE_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		SCRIPT_ON_LOAD: {
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
		tableName: 'RB_PAGE'
	});
};
