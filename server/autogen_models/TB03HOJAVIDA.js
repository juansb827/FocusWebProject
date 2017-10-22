/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB03HOJAVIDA', {
		Cidactivo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cgrupoactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdesgeneral: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dfechadepreciar: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Cidactivomain: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Casignacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncostocompraloc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ncostoreactual: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cidasegurado: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccategoactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cterceroseguro: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ntarifapoliza: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cidresponsable: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cserialactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cmarcaactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechaproxman: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nmetododeprecia: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Dvtosoap: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Dvtoimprod: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Dvtoimptim: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cidactivobarras: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cpolsegu: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvalsalvamento: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ncostocomprausd: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvidautil: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ncostoreposicio: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cplacauno: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cplacados: {
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
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfecvtoseg: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechacompra: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Najustar: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Npartesactivo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cdesdetallada: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccontrato: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cclaseactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cfacturacompra: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ntipodeprecia: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cestadoactivo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nnumdocingreso: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dvtoleas: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechapoliza: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Dfecvenpoliza: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipoactivo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dvtogases: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cpolizaleasing: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cterceroleasing: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nnumdocsalida: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalorprima: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalasegurado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ctercerosoap: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidproveedor: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nmetdepniif: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Dfecdepniif: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nvidautilniif: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nvalresniif: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cidreferencia: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ''
		}
	}, {
		tableName: 'TB03HOJAVIDA'
	});
};
