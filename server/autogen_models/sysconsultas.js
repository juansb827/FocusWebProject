/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysconsultas', {
    NCODCON: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cnomtabla: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    TAG_VAL: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    CAMP_VAL: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    LISC_VAL: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    FILT_VAL: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    FIL1_VAL: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    COL1_VAL: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    FIL2_VAL: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    COL2_VAL: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    TIT_VAL: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    RELT_VAL: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    RELI_VAL: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    RELL_VAL: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    FUN_VAL: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    MENSAJ_ERR: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    CATRAE_VAL: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    DESCRIPCIO: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    VAL_AUX: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    VAL_NOMFIS: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    EJEC_MEMO: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CNEMONICO: {
      type: DataTypes.CHAR,
      allowNull: false
    }
  }, {
    tableName: 'sysconsultas'
  });
};
