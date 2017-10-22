/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_CONN_TEST', {
		CUST_ID: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'RB_CONN_TEST'
	});
};
