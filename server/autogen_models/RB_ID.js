/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_ID', {
		ID_TYPE: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		NEXT_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		}
	}, {
		tableName: 'RB_ID'
	});
};
