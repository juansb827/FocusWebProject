/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB27POLIZAS', {
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
		Dfecharegistro: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cnumformulario: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntiposolicitud: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ctomadornit: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctomadornombre: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cnumeropoliza: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Camparobasico: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nvalasegurado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntotalprima: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cnitsolicitante: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnomsolicitante: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cap1solicitante: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cap2solicitante: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ctiponit: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechanacio: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Ncodpaisnacio: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncoddptonacio: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncodciudnacio: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cgenero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdirresidencia: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ctelefonofijo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccelular: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncodpaisresi: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncoddptoresi: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncodciudresi: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cocupacion: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechainicio: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cnitpagador: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidconvenio: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nplazomeses: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cobservagen: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
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
		tableName: 'TB27POLIZAS'
	});
};
