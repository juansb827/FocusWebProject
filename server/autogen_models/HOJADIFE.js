/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOJADIFE', {
    TERCERO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DIFERIDO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    NUM_CUOTAS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CUOTFIJAS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TOT_CREDIT: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    TOT_DEBITO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CEN_COSTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    SUB_COSTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ESQUEMA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    MES: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: '0 '
    },
    FECHA_CREA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    VALOR_DIF: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    DOCUMENTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NUMERO_CPB: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CEN_UTILID: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    SUB_UTILID: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CONCEPTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TOTAJUSTES: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    REFERENCIA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    AJUXINFLA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'HOJADIFE'
  });
};
