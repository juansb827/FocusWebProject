/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_LOGIN_SESSION', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SESSION_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		START_TIME: {
			type: DataTypes.DATE,
			allowNull: false
		},
		END_TIME: {
			type: DataTypes.DATE,
			allowNull: true
		},
		IP_ADDRESS: {
			type: DataTypes.STRING,
			allowNull: true
		},
		HTTP_SESSION: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LOGIN_TYPE: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		LOGIN_USER: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LOGIN_USRID: {
			type: DataTypes.BIGINT,
			allowNull: true
		}
	}, {
		tableName: 'RB_LOGIN_SESSION'
	});
};
