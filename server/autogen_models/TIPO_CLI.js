/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TIPO_CLI', {
		TIP_CLIE: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		DESCRIPC: {
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
		tableName: 'TIPO_CLI'
	});
};
