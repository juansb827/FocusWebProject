/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_APP_HISTORY', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		HIST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		APP_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		VERSION: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		FILE_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		CREATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'RB_APP_HISTORY'
	});
};
