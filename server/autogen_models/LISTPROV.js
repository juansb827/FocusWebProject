/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LISTPROV', {
		TERCERO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		REFERENCIA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NCOSTO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'LISTPROV'
	});
};
