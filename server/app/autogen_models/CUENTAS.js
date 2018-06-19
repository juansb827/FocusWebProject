/* jshint indent: 2 */

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
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cue_nivel: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cue_digani: {
      type: DataTypes.DOUBLE,
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
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cue_tasi_r: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cue_interf: {
      type: DataTypes.DOUBLE,
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
      allowNull: false,
      defaultValue: ' '
    },
    Nobligadr4: {
      type: DataTypes.BOOLEAN,
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
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Cue_intes: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cue_ivreto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Tip_flu: {
      type: DataTypes.DOUBLE,
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
      type: DataTypes.DOUBLE,
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
      type: DataTypes.BOOLEAN,
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
    Cidctohomo1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTAHOMOLOGA1: {
      type: DataTypes.STRING,
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
      defaultValue: ''
    }
  }, {
    tableName: 'CUENTAS'
  });
};
