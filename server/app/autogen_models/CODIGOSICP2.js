/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CODIGOSICP2', {
    LOC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TIP: {
      type: DataTypes.STRING,
      allowNull: true
    },
    COM: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MET: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nhorahom: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ncosto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Nrangofin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Nrangoini: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ccodrepcntr: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    num_item: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cctelna: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'CODIGOSICP2'
  });
};
