/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PAAG', {
		NANO: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		NMES: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		NVALOR: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'PAAG'
	});
};
