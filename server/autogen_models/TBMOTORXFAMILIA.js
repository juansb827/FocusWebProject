/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBMOTORXFAMILIA', {
		Cchasis: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnrobl: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Familia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cmotor: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TBMOTORXFAMILIA'
	});
};
