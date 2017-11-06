/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PAISES', {
    Cnompais: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodpais: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'PAISES'
  });
};
