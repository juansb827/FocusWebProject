/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB29PARKTARIFAS', {
    Cidtarifa: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdescripcion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nminbase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nmingracia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nvaltarifa: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntarnoche: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nporiva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Naproximar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ntaller: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Narriendo: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB29PARKTARIFAS'
  });
};
