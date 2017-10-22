/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tempocodigos', {
		F1: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		F2: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		tableName: 'tempocodigos'
	});
};
