/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11LISTAPROV', {
		Ncosto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'TB11LISTAPROV'
	});
};
