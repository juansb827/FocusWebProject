/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LEASING', {
    CONTAINER: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TYPE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    REFERENCE NO: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'LEASING'
  });
};
