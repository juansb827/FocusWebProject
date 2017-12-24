/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysdcnencgrilla', {
    ncodgrd: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cnomfrm: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    mejegrd: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mcondcrea: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cdescrip: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    lusuario: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'sysdcnencgrilla'
  });
};
