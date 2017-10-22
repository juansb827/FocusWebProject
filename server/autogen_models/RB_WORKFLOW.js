/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_WORKFLOW', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PROCESS_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		STATUS_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ACTION_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ORDER_NO: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'RB_WORKFLOW'
	});
};
