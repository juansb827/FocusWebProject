/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB99CONFIGTABLES', {
    Iidregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Cnit: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnombre: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Curllogo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ' '
    },
    Ipserverftp: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ippuerto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ipusuario: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ippassword: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nresolucion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nmanegaturno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TB99CONFIGTABLES'
  });
};
