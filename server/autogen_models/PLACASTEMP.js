/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PLACASTEMP', {
		CENCOSTO: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PLACA: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'PLACASTEMP'
	});
};
