/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PAISES', {
		NCODPAIS: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		CNOMPAIS: {
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
		tableName: 'PAISES'
	});
};
