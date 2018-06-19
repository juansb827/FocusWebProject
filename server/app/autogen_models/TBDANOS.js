/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBDANOS', {
    Ccoddan: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdes1dan: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdes2dan: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodisodan: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TBDANOS'
  });
};
