/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBGRUPOMOVCNTR', {
    Cgrupomov: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdesmov: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nobligamotonave: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'TBGRUPOMOVCNTR'
  });
};
