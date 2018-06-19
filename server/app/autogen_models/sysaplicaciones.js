/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysaplicaciones', {
    NUMERAL: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NUM_APLIC: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NOM_APLIC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    OPC_APLIC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NOM_OPCION: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    PROMPT: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TIPO_EJECU: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TECLA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    LABEL_TEC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    LINEACOMAN: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    HABILITADA: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    MENU_APLIC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TIPO_APLIC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    SCHEME: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    LIST_PARAM: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    SKIP: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    COND_PARAM: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    MENSAJE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    APL_BMP: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    APL_ICO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TAB_ANEXAS: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    DIR_APLICA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    INI_APLICA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    LIB_APLICA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    LIB_CLASE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    SISTEMA: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LIB_AYUDA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    GRUP_USU: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ImagenPng24: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    ImagenPng16: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'sysaplicaciones'
  });
};
