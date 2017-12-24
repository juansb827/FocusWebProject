/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPFAC', {
    DESCRIPCIO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DOCUMENTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    FORMA: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    MET_FAC: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    TMVTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    FORMA_OTRA: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    ESQUEMA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTANTCPO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTAVENTA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NAT_VENTAS: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTAPROD: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NAT_PROD: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTAIVA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NAT_IVA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTADTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NAT_DESC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTARET: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NAT_RET: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NAT_ANT: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    DBOTROS: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTARETIVA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CRERETE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NAT_OTRO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NAT_AUTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTARETICA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NAT_RETICA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NAT_RETIVA: {
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
    tableName: 'TIPFAC'
  });
};
