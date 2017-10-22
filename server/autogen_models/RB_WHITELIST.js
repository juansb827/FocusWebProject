/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_WHITELIST', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ENTITY_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		WHITELIST: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ROLE_IDS: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'RB_WHITELIST'
	});
};
