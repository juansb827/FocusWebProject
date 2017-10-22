/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_RSS_SESSION', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SESSION_ID: {
			type: DataTypes.STRING,
			allowNull: false
		},
		LIST_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		},
		USED_AT: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'RB_RSS_SESSION'
	});
};
