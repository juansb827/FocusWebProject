/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_TEMPLATE', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		TEMPLATE_ID: {
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
		TEMPLATE_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		TEMPL_TYPE: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TEMPLATE_FILE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		MAIL_SUBJECT: {
			type: DataTypes.STRING,
			allowNull: true
		},
		MAIL_BODY: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		CONTENT_TYPE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		SYSTEM_NAME: {
			type: DataTypes.STRING,
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
		tableName: 'RB_TEMPLATE'
	});
};
