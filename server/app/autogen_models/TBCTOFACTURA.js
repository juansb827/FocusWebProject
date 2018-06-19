/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBCTOFACTURA', {
    Cctofac: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cnomcto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cplantilla: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nporiva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nporret: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cctaingreso: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cctaiva: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TBCTOFACTURA'
  });
};
