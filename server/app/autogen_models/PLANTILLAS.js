/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLANTILLAS', {
    ESQUEMA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DESCRIPCIO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    VARIABLE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    MDE_CONCEP: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    COD_CUENTA: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    MDE_TMVTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ORDEN: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    MDE_VALOR: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CEN_COSTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TERCERO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NOM_FORMUL: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CEN_UTILID: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    MDE_DOCRE1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    MDE_DOCRE2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ASIGNA_MAS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    TIPO_ESQ: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    MDE_DOCRE3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: '  '
    },
    caplicacion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'PLANTILLAS'
  });
};
