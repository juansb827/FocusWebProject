/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_ZIP_CODES', {
		ZIP_CODE: {
			type: DataTypes.CHAR,
			allowNull: false,
			primaryKey: true
		},
		LATITUDE: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		LONGITUDE: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		COS_LAT: {
			type: DataTypes.DECIMAL,
			allowNull: false
		}
	}, {
		tableName: 'RB_ZIP_CODES'
	});
};
