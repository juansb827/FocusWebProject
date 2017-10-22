/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB99ACTIVIDADESECONOMICAS', {
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
		Cdesactividad: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
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
		Cidcuenta: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cgrupo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cclase: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB99ACTIVIDADESECONOMICAS'
	});
};
