/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_USER_PREFS', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		XML_STRING: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'RB_USER_PREFS'
	});
};
