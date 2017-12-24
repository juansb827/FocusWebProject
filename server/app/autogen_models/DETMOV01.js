/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DETMOV01', {
    DOCUMENTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NUMERO_CPB: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    NANO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NMES: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MDE_FEHCPB: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
    },
    CEN_UTILID: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    CEN_COSTO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    TERCERO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    COD_CUENTA: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    MDE_BASE: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    MDE_CONCEP: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    CDOCORIGEN: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    CNUMORIGEN: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '((0))'
    },
    NUM_ITEM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MDE_TMVTO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    MDE_VALOR: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    MDE_DOCRE1: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    MDE_DOCRE2: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    COD_FLUJO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    MES: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ANULADO: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DESCRIPTOR: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NENTREGO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_CIUTER: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    C_SUCTER: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    C_TIPPAG: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    C_TERALT: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nconceptoig: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CMONEDA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ntasamoneda: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NVALMON: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NVALUSD: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_GRPTER: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    C_TPOTER: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    C_ZONTER: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    C_GRPCAR: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NINTERFAZ: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    FECHA_GIR: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    CCODRUTA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCODGRU: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NORDRUTA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    ID_OPE_REF: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CGRUPDOC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDOCREF: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNEMONICO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    PAGELECIT: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    PAGELECAP: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NCOBRADO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUNIDADES: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NCUOTA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NCIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    MDE_DOCRE3: {
      type: "NCHAR",
      allowNull: true,
      defaultValue: ' '
    },
    NNATMOV: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cgrupogen: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    NtasaImpuesto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NNIIF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    cidproyecto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'DETMOV01'
  });
};
