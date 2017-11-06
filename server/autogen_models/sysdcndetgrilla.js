/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysdcndetgrilla', {
    ncodgrd: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cnomcam: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    mejegrd: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    norder: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cclase: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ctipo: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    nlongitud: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ndecimales: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ltemporal: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'sysdcndetgrilla'
  });
};
