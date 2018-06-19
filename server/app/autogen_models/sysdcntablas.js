/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysdcntablas', {
    caplicacion: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cnomtabla: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cdestabla: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    dfeccreadic: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dfecmoddic: {
      type: DataTypes.DATE,
      allowNull: false
    },
    nomfisico: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    est_usuari: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    primaria: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    nomtag: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    llavetag: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    pri_segmts: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    est_detnt: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    es_docum: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    nemotec: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    filtra_ano: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    log_adic: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    log_mod: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    log_elim: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    log_anul: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    filtra_cia: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'sysdcntablas'
  });
};
