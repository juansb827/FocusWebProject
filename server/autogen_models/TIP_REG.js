/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TIP_REG', {
		CCOD: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CDES: {
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
		tableName: 'TIP_REG'
	});
};
