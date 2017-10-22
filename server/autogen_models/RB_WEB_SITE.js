/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_WEB_SITE', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SITE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SITE_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STYLESHEET: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IS_MAIN_SITE: {
			type: DataTypes.CHAR,
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
		HEADER: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		FOOTER: {
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
		tableName: 'RB_WEB_SITE'
	});
};
