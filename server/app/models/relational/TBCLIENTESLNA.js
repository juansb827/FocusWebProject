/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBCLIENTESLNA', {
    Cdesctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cnitagente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodciud: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ncodpais: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ncoddpto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cforpago: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ntarhorhom: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cemailoper: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodcode1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodcode2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodcode3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Noblubica: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ntarusd: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ctipctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cemailctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnitctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnemctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cfacturar: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Csiscalculo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Noblautsal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cservidorftplna: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cusuarioftp: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cpwdftp: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cpuertoftp: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nftpactivo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nftpservicio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NOBLBOOKING: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TBCLIENTESLNA'
  });
};
