/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB03MOVXFUNCIONARIO', {
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Num_item: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Cidcedula: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nnumdoc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Ctipdoc: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cidactivo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechamov: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cplacauno: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cserialactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctransaccion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Creferactivo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cobservacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nano: {
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
		},
		Cmodeloactivo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cmarcaactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncantidad: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'TB03MOVXFUNCIONARIO'
	});
};
