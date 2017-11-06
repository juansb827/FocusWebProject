/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSPERMISOS', {
    Ntipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nclase: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Naplicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nopcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Npermiso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SYSPERMISOS'
  });
};
