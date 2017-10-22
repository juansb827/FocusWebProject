/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_TAGS', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		TAG: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'RB_TAGS'
	});
};
