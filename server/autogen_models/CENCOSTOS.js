/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CENCOSTOS', {
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cen_nombre: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_nivel: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cen_termin: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_digani: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cen_digsni: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cen_activo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cmodelofac: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Homo1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Homo2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Centroold: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cgrupo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Carea: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cidfuncionario: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccta1: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ccta2: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ccta3: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Npor1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Npor2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Npor3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cencostoadmin: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cplaca: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nptofin: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'CENCOSTOS'
	});
};
