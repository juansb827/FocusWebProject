/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB98IDINTERFACES', {
    Nidinterfaz: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Cdesinterfaz: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cnaturaleza: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB98IDINTERFACES'
  });
};
