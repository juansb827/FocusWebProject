/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB29PARKPORTERIAS', {
    Cidporteria: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdesporteria: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cen_costo: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB29PARKPORTERIAS'
  });
};
