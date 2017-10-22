/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB03PARTES', {
		Cidactivo: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: ' '
		},
		Cidcedula: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nnumdoc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ctipdoc: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdescripcion: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dfechamov: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cgrupoactivo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Creferactivo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cserialactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cplacauno: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cexiste: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB03PARTES'
	});
};
