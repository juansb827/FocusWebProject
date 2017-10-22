/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('GRUPOCTE', {
		GRUPO_CLIE: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		GRUPO_NOMB: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'GRUPOCTE'
	});
};
