/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EXCLUYE', {
		COD_CUENTA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		EXCL_CTA: {
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
		tableName: 'EXCLUYE'
	});
};
