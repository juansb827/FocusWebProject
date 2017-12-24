/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cntralquilados', {
    CNTR: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'cntralquilados'
  });
};
