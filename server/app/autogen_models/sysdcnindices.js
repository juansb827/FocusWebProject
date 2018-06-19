/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysdcnindices', {
    caplicacion: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cnomtabla: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ind_nomtag: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ind_expres: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ind_tag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ind_usuari: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    unico: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    est_nomant: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ind_segmts: {
      type: DataTypes.CHAR,
      allowNull: false
    }
  }, {
    tableName: 'sysdcnindices'
  });
};
