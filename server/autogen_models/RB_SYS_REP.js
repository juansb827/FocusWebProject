/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_SYS_REP', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CUST_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		X_L_P: {
			type: DataTypes.DATE,
			allowNull: true
		},
		X_U: {
			type: DataTypes.STRING,
			allowNull: true
		},
		X_A_U: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'RB_SYS_REP'
	});
};
