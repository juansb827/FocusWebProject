/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_ROLE_PAGE', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PAGE_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ROLE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PAGE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		}
	}, {
		tableName: 'RB_ROLE_PAGE'
	});
};
