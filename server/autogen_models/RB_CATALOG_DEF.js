/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_CATALOG_DEF', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CATALOG_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CATALOG_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		CATALOG_INTEGRATION_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		OBJ_ID_LIST: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		CREATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: true
		},
		UPDATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		UPDATED_AT: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'RB_CATALOG_DEF'
	});
};
