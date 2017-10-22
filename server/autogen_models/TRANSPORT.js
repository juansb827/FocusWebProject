/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TRANSPORT', {
		CCODTRAN: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CNOMTRAN: {
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
		tableName: 'TRANSPORT'
	});
};
