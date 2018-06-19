/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBTIPOSCTES', {
    Ctipctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdestipcte: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipdoc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TBTIPOSCTES'
  });
};
