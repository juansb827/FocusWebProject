/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LIST_PRE', {
		REF_VENT: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NUM_LISTA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		PRECIO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CATEGORIA: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'LIST_PRE'
	});
};
