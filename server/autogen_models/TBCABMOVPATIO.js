/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBCABMOVPATIO', {
    Ccodcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipomov: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodevelog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfecmvto: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Nmes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cbooking: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cplaca: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipdoc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Nnumdoc: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Ctipocntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctamcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cestadocntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodinspector: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cviaje: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnumcomodato: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cptoorigen: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cfactranspor: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cobservacion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnitcliente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cctelnades: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdescedula: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodsitcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnitagente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nforpago: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Chora: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cptodestino: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cgrupomov: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cusuariolog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdestelefo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Cnumrefer1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnumerobl: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cmotonave: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Syscomputador: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdestranspor: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdesconductor: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cestfincntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipdocori: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nnumdocori: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cnumstacking: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfecingresomars: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Dfecautorizmars: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cusologico: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NPESCARPUERTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NPESCARBASCULA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CNUMSELLOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DFECHAARRIBO: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ''
    },
    CDETALLECARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    NTURNO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    CEN_COSTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    NgeneroCodeco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NpesoCarga: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TBCABMOVPATIO'
  });
};
