/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('syssucesos', {
		codigo: {
			type: 'NUMERIC',
			allowNull: false
		},
		descrip: {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'syssucesos'
	});
};
