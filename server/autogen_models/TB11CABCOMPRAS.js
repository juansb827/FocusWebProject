/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11CABCOMPRAS', {
		Ctipdocorden: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nnumdocorden: {
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
		Estado: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Proveedor: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Mdesobjecto: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Nvalortotal: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalormcia: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dfechafac: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nnumordpadre: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dfechaorden: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidrecurso: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Id_ope: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvaloranticipo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cformapago: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cparametro: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipdocordpadre: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipocon: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cmediotrans: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ctipdocfac: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cgrupoprov: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Cgrupdoc: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Id_ope_ref: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nplazo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nnumdocreq: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nnumdocfac: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cdocref: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Num_ope_re: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
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
		Dfecmaxentrega: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Ccodruta: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ciddireccion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cobra: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_utilid: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nrecibido: {
			type: 'BIT',
			allowNull: false
		},
		Nordruta: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalordto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvaloriva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ctipdocreq: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cclacon: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nvalorotros: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccodgru: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccodicon: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidmodelo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ntasamoneda: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntotalmoneda: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cmoneda: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB11CABCOMPRAS'
	});
};
