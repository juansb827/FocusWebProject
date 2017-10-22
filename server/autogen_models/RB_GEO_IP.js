/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_GEO_IP', {
		IP_FROM: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		IP_TO: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		COUNTRY_CODE: {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'RB_GEO_IP'
	});
};
