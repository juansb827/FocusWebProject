/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB27POLIZASASEGURADOS', {
		Csucursal: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nnuminterno: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Cnumeropoliza: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ctipoasegurado: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cnomasegurado: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Capelasegurado: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cgenero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cparantesco: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechanacio: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Ctiponitbenefi: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidbeneficiario: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ccalidabenefi: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nporbeneficio: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'TB27POLIZASASEGURADOS'
	});
};
