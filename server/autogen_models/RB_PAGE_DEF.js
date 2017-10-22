/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_PAGE_DEF', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PAGE_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		IS_PORTAL: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		OBJ_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		PAGE_TYPE: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		PAGE_DEF_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		JSP_NAME: {
			type: DataTypes.STRING,
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
		tableName: 'RB_PAGE_DEF'
	});
};
