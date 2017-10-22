/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB99ACTIVIECONOXTERCERO', {
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ncodpais: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Ncoddpto: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Ncodciud: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Cidactividad: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ntarifaxmil: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dfechalog: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cusuariolog: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Syscomputador: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB99ACTIVIECONOXTERCERO'
	});
};
