/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_PREFERENCES', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PREF_STRING: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'RB_PREFERENCES'
	});
};
