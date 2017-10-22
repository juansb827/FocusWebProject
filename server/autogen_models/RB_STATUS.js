/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_STATUS', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		STATUS_ID: {
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
		ORDER_NO: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		STATUS_NAME: {
			type: DataTypes.STRING,
			allowNull: false
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
		tableName: 'RB_STATUS'
	});
};
