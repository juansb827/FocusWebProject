/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_INTEGRATION', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		INT_TYPE: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		INTERNAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		EXTERNAL_ID: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'RB_INTEGRATION'
	});
};
