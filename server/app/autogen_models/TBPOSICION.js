/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBPOSICION', {
    Ccodpos: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdes1pos: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdes2pos: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TBPOSICION'
  });
};
