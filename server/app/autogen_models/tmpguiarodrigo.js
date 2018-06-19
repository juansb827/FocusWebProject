/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpguiarodrigo', {
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
      allowNull: false
    },
    Ccodrepcntr: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Num_item: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Ccargoa: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Nancho: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Nwlt: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Ntarhorhom: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Nlargo: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Nvalor: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Ctipdoc: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Ncoshorhom: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ntariva: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Ncosto: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Ccodubi: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Ccodpos: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Ccoddan: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Ccodele: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Ccodmet: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Cmatcntr: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Ctipocntr: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Cmoneda: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Dfectaller: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Dfecauttal: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Nnumdoc: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Nhorashom: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    Cgruporep: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    Nunidades: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    NANO: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'tmpguiarodrigo'
  });
};
