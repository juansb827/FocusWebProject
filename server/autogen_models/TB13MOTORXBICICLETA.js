/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB13MOTORXBICICLETA', {
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cchasis: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cmotor: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnumerobl: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB13MOTORXBICICLETA'
	});
};
