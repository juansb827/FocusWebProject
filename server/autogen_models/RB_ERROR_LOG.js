/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_ERROR_LOG', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ERROR_LOG_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SERVER_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ERR_TYPE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ERR_MESSAGE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ERR_TRACE: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		CREATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'RB_ERROR_LOG'
	});
};
