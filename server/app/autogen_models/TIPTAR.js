/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPTAR', {
    CCODTIPTAR: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CNOMBRE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNIT: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NPORRET: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NPORBAS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NPORCOM: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NPORICA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NPORIVA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CCTABAN: {
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
    tableName: 'TIPTAR'
  });
};
