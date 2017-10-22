/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TAB_FORI', {
		FORMA_IDEN: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		FOR_DESCRI: {
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
		tableName: 'TAB_FORI'
	});
};
