/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HISCUOTAS', {
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
    NUM_CUOTA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    VALOR_CUO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    FECHA_CREA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    FECH_AMORT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    AMORTIZADO: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
    NANO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NVALAJUSTE: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    DFECAJUSTE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    NAJUSTADO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NSALDO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NPORAJUS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'HISCUOTAS'
  });
};
