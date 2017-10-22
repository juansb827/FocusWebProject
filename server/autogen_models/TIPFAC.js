/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TIPFAC', {
		Tmvto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Forma_otra: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Descripcio: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Forma: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Met_fac: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ctaprod: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nat_prod: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Docinventar: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Bodinventar: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cmensajefac1: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cmensajefac2: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cidmoneda: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TIPFAC'
	});
};
