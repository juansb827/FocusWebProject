/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_PERMISSION', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		RESOURCE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PRINCIPAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PERMISSION: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'RB_PERMISSION'
	});
};
