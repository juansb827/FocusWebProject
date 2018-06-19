/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('syssucesos', {
    codigo: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    descrip: {
      type: DataTypes.CHAR,
      allowNull: false
    }
  }, {
    tableName: 'syssucesos'
  });
};
