/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TRANSACC', {
    TRANSA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    XP_TDESCRI: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    XP_TTMVTO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    XP_TIGUNID: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_TIGVALR: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_TEXITER: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_TRSAUTO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_TDOCENT: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    XP_TTRSENT: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    XP_TDSCENT: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    XP_LTRAAFI: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TRANSACC'
  });
};
