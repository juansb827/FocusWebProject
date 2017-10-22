/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_USER_FLAGS', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		IS_VIEWED: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_FLAGGED: {
			type: DataTypes.CHAR,
			allowNull: true
		}
	}, {
		tableName: 'RB_USER_FLAGS'
	});
};
