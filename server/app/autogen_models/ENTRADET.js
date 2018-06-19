/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ENTRADET', {
    DOCUMENTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NUMERO_CPB: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DESCRIPTOR: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
    },
    CEN_UTILID: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    SUB_UTILID: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    CEN_COSTO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    SUB_COSTO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    BODEGA: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    REFERENCIA: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    DESCRIPCIO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    UNIDADES: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    COST_UNID: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CTO_TOTAL: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    TOT_PAR: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    COSTOSA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    COST_UNSA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACTIVIDAD: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    DESHECHADA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUM_ITEM: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    ESQUEMA: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    DOC_OC: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    ORDEN: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    OTRO_VAL1: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    OTRO_VAL2: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    MES: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    RECHAZOS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    OTROS_IMP: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    ANULADO: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    MEDIDA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    IVA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    DESCUENTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    SALD_UNI: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    UNI_ORDE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: '0 '
    },
    NANO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CCODLOTE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'ENTRADET'
  });
};
