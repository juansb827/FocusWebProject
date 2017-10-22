/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AUXPINV', {
		NOMPAR: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		VALCAR: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		VALNUM: {
			type: 'NUMERIC',
			allowNull: false
		},
		VALFECH: {
			type: DataTypes.DATE,
			allowNull: false
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'AUXPINV'
	});
};
