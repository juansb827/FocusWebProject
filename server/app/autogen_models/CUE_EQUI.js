/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CUE_EQUI', {
    NANO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUM_ITEM: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    CTA_INI: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTA_FIN: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TER_INI: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TER_FIN: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTAI_A: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTAF_A: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    DESACTIVAR: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    SALDO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    LACU: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LASU: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CUE_EQUI'
  });
};
