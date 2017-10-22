/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LIST_GEN', {
		NUM_LISTA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		DES_LISTA: {
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
		tableName: 'LIST_GEN'
	});
};
