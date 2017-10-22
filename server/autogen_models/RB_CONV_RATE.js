/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_CONV_RATE', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SRC_CODE: {
			type: DataTypes.STRING,
			allowNull: false
		},
		DEST_CODE: {
			type: DataTypes.STRING,
			allowNull: false
		},
		RATE_DATE: {
			type: DataTypes.DATE,
			allowNull: true
		},
		RATE: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'RB_CONV_RATE'
	});
};
