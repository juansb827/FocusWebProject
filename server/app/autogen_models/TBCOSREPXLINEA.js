/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBCOSREPXLINEA', {
    Num_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ntariva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ccodrepcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nhorashom: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nrangofin: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ccodubi: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccoddan: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodele: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ccodmet: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cmoneda: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cmatcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncosto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nrangoini: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ctamcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipocntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodpos: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ccptolinea: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDESCRIPCION: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    CCODISOELE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    CCODISOUBI: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    CCODISODAN: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    CCODISOMET: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    CIDSECUENCIA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    syscomputador: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    cusuariolog: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TBCOSREPXLINEA'
  });
};
