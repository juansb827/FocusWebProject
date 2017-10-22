/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RUTATRANS', {
		CRUTATRANS: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CNOMBRE: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		ZONA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'RUTATRANS'
	});
};
