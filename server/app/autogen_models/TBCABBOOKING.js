/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBCABBOOKING', {
    Dfechavto: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cnitagente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnumbooking: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cviaje: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechamod: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodevelog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cmotonave: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cobserva: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncerrarmanual: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cptoorigen: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cptodestino: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cusuariolog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cusuariomod: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnomsia: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Dfecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
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
    Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ncancelxdate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CEN_COSTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TBCABBOOKING'
  });
};
