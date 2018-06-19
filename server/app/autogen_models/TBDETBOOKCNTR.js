/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBDETBOOKCNTR', {
    Cnumbooking: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ctamcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cestfincntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ctipocntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cnitagente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nsolicitados: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Dfecharetirar: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TBDETBOOKCNTR'
  });
};
