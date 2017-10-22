/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_TRANSLATION', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		LANGUAGE: {
			type: DataTypes.STRING,
			allowNull: false
		},
		GLOBAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		FIELD_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		TEXT_VALUE: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'RB_TRANSLATION'
	});
};
