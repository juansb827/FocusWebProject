/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TAB_FOR0', {
		FOR_DESCRI: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		FORMA_IDEN: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		TIPO: {
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
		tableName: 'TAB_FOR0'
	});
};
