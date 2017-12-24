/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CATPAGOS', {
    CCATPAGO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CNOMBRE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CATPAGOS'
  });
};
