/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TAB_FORC', {
		For_descri: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Forma_iden: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'TAB_FORC'
	});
};
