/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB25TARIFASXLINEA', {
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cidcomiscpto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Npor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nvalor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cfiltro: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cmoneda: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Npordto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nporiva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TB25TARIFASXLINEA'
  });
};
