/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBEVENTOSCNTR', {
    Cdescmvto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cmovlog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ccodevelog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cusolog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ccatevento: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdesmovesp: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodevento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cloclog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    }
  }, {
    tableName: 'TBEVENTOSCNTR'
  });
};
