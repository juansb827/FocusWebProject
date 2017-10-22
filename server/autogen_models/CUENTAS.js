/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CUENTAS', {
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Activa: {
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
		Cue_termin: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cue_digsni: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cue_nivel: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cue_digani: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cue_natura: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cue_acucco: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cue_descri: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cue_obldr2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ntasaimpuesto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cue_tasi_r: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cue_interf: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cue_tipo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnumpoli: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccodcpto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncodcon2: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncodcon3: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ncodcon4: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cgrupogen: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Nobligadr4: {
			type: 'BIT',
			allowNull: false
		},
		Cue_fechcr: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Ctimpuesto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnomcpto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nobligadr3: {
			type: 'BIT',
			allowNull: false
		},
		Cue_intes: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cue_ivreto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tip_flu: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccodanex1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cue_alias: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cue_obldr1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cue_terobl: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cue_tipaju: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Baseminima: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ncodcon1: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cformato: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nmoneda: {
			type: 'BIT',
			allowNull: false
		},
		Cue_acuter: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cue_oblflu: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nniif: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ctahomologa1: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		},
		CIDCTOHOMO1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ''
		},
		CNOMHOMNIIF: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ''
		},
		cue_acupro: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: 'N'
		},
		nptofin: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		},
		cidGRUPOGASTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ''
		}
	}, {
		tableName: 'CUENTAS'
	});
};
