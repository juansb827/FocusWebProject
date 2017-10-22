/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB03CPTOSMANTENIMIENTO', {
		Cidconcepto: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cdescripcion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvalor: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Noblunitario: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'TB03CPTOSMANTENIMIENTO'
	});
};
