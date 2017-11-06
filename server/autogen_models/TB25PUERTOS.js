/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB25PUERTOS', {
    Cidpuerto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdescpuerto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipopuerto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodciud: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ncoddpto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ncodpais: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nexentothc: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'TB25PUERTOS'
  });
};
