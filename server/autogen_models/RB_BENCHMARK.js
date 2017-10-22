/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_BENCHMARK', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		CUST_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BUILD_DATE: {
			type: DataTypes.DATE,
			allowNull: true
		},
		PAGES_CNT: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		PAGES_MS: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		PAGE_TIME_MS: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		TX_CNT: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		TX_MS: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		TX_TIME_MS: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DEPLOYED_APPS: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		TOTAL_USERS: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		TOTAL_RECORDS: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		FILE_STORAGE: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		API_CALLS: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		API_CALLS_TIME: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'RB_BENCHMARK'
	});
};
