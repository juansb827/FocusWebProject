/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EVERGREEN', {
    Ccodele: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Ccodmet: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Nrangoini: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Nrangofin: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Nhorashom: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    NCOSTO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CMATCNTR: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CTAMCNTR: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    F9: {
      type: DataTypes.STRING,
      allowNull: true
    },
    F10: {
      type: DataTypes.STRING,
      allowNull: true
    },
    F11: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'EVERGREEN'
  });
};
