/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TAB_FORB', {
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
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'TAB_FORB'
	});
};
