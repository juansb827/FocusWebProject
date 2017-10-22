/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DETMOV22', {
		Anulado: {
			type: 'BIT',
			allowNull: false
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
		Ccodruta: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: '0 '
		},
		Cdocref: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cgrupdoc: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cod_cuenta: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ctipocon: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cue_nivel: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Docum_con: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Docum_ope: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Emer_eco: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Estado: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Fec_ult_pr: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Fech_venc: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Fecha: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Fra_prov: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Hora_proc: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Id_ins: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Id_ope: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Id_ope_ref: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Mes: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nafeccon: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nordruta: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_con: {
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
		Num_ope: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Num_ope_re: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Num_reg1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Numero_cpb: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Obs_cab: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Observacio: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Orden: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Orden2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Recurso: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Res_indres: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Saldoxej: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Tip_mov: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Uni_codigo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Unidad: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Usuario: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Valor: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Valor_ant: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Variacion: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Vigencia: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		}
	}, {
		tableName: 'DETMOV22'
	});
};
