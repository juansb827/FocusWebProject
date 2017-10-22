/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_ACT_TRAIL', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		TRAIL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		OBJ_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		TRAIL_TEXT: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		COMM_LOG_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		CREATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		},
		LOGIN_USER: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LOGIN_MODE: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'RB_ACT_TRAIL'
	});
};
