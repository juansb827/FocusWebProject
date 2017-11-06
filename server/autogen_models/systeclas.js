/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('systeclas', {
    VAR_TECLAS: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NOM_TECLAS: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NUM_TECLAS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    OPE_TECLAS: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    COM_TECLAS: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    DES_TECLAS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'systeclas'
  });
};
