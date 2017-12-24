/* jshint indent: 2 */
var Sequelize = require("sequelize");
var moment = require("moment")
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBTURNOS', {
    Ccliente: {
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
    Nturno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nmes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ccodcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cbooking: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ndia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Cplaca: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cobserva: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
      primaryKey: true
    },
    Cdestranspor: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cusuariolog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Syscomputador: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdesconductor: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodcntr2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccelular: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Num_item: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    Cusologico: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipoturno: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Natendido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    Dfechacerrado: {
      type: DataTypes.DATE 
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
    Cviaje: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Npesocarga: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.0
    },
    Cgrupomov: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnitcliente: {
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
    Cdescedula: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cen_costo: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Cnumsellos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cdetallecarga: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cptodestino: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechaarribo: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    Npescarpuerto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    Npescarbascula: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'TBTURNOS',
    setterMethods: {
      fechaTurno(value){
        const currentDate=moment();              
        this.setDataValue('Dfechalog', currentDate);
        this.setDataValue('Nano', currentDate.year());
        this.setDataValue('Nmes', currentDate.month()+1);  //January is 0!
        this.setDataValue('Ndia', currentDate.date());       
        
      }
    }

  });
};
