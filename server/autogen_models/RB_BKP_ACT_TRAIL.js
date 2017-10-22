/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_BKP_ACT_TRAIL', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		STORAGE_SRV_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ACTIVITY: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TOTAL_RECORDS: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		BKP_FILE_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BKP_FILE_SIZE_MB: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		START_TIME: {
			type: DataTypes.DATE,
			allowNull: true
		},
		END_TIME: {
			type: DataTypes.DATE,
			allowNull: true
		},
		TIME_TAKEN_MINS: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		STATUS: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'RB_BKP_ACT_TRAIL'
	});
};
