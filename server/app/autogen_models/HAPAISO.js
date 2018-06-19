/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HAPAISO', {
    ELE: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LOC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DAN: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MET: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'HAPAISO'
  });
};
