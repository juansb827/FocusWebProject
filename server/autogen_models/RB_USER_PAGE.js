/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_USER_PAGE', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PAGE_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PAGE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		}
	}, {
		tableName: 'RB_USER_PAGE'
	});
};
