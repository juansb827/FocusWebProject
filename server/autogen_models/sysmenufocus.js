/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysmenufocus', {
    CNUM_APLIC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NUMERAL: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    PROMPT: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NOM_APLIC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TIPO_EJECU: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    LINEACOMAN: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    MENU_APLIC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    SKIP: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    MENSAJE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LIST_PARAM: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    LIB_APLICA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    APL_ICO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    INI_APLICA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    comandoweb: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'sysmenufocus'
  });
};
