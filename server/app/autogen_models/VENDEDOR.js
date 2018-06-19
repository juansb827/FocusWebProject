/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VENDEDOR', {
    COD_VEND: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    ALIAS: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    VEN_AANT: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    VEN_AACT: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNOMVEN: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    EMAIL: {
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
    tableName: 'VENDEDOR'
  });
};
