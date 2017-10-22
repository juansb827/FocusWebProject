/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB03OPERACIONES', {
		Coperacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cdescripcionmov: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nsigno: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Npideproveedor: {
			type: 'BIT',
			allowNull: false
		},
		Npidevida: {
			type: 'BIT',
			allowNull: false
		},
		Npidecc: {
			type: 'BIT',
			allowNull: false
		},
		Npidedias: {
			type: 'BIT',
			allowNull: false
		},
		Npidedolares: {
			type: 'BIT',
			allowNull: false
		},
		Npiderefer1: {
			type: 'BIT',
			allowNull: false
		},
		Npideserial: {
			type: 'BIT',
			allowNull: false
		},
		Npideplaca: {
			type: 'BIT',
			allowNull: false
		},
		Npideparte: {
			type: 'BIT',
			allowNull: false
		},
		Npidecedula: {
			type: 'BIT',
			allowNull: false
		},
		Cidtransaccion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipdoc: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Npideproy: {
			type: 'BIT',
			allowNull: false
		}
	}, {
		tableName: 'TB03OPERACIONES'
	});
};
