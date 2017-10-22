/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TABCUTIL', {
		Cut_digani: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cut_digsni: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cut_activo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_utilid: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cut_descri: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cut_nivel: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cut_termin: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TABCUTIL'
	});
};
