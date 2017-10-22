/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DESCPROV', {
		Npagaantes: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Npordto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'DESCPROV'
	});
};
