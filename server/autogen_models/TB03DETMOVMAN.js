/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB03DETMOVMAN', {
		Ctipdoc: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nnumdoc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Dfechamov: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cidactivo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cplaca: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidproveedor: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidfuncionario: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cfacturaprov: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nkilometraje: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntotfactura: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntotiva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cidconcepto: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ncantidad: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntotalitem: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Crefer1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cusuariolog: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechalog: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Syscomputador: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cidaprobador: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Num_item: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cobservacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nunitario: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Crefer2: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB03DETMOVMAN'
	});
};
