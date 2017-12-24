/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ENTRACAB', {
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
    FRA_PROV: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    REM_PROV: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    PROVEEDOR: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    TRANSACCIO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    ANULADO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FACTURADO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    DOC_FAC: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    NUM_FAC: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    MES: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    OPER_CREA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNUMPOLI: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCLACON: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NANO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CNUMBL: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    OBRA: {
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
    tableName: 'ENTRACAB'
  });
};
