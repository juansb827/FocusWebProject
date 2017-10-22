/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TARIFASIVA', {
		Codiso: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Descripiso: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvaltariva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ter_regiva: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TARIFASIVA'
	});
};
