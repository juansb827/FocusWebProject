/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_DATA_MAP', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		MAP_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		IS_IMPORT: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		MAP_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		DEST_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SRC_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		XML_STRING: {
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
		tableName: 'RB_DATA_MAP'
	});
};
