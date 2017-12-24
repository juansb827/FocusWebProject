/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBDETMOVPATIO', {
    Nautorizado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ntaller: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Dfecmvto: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodrepcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Num_item: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Ccargoa: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nancho: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nwlt: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntarhorhom: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nlargo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nvalor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ctipdoc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ncoshorhom: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ntariva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ncosto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ccodubi: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodpos: {
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
      defaultValue: ' '
    },
    Ccodmet: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cmatcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipocntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cmoneda: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfectaller: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Dfecauttal: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Nnumdoc: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nhorashom: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cgruporep: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nunidades: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NANO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TBDETMOVPATIO'
  });
};
