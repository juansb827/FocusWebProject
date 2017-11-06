/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB25RECALADAS', {
    Ctipdocrcl: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nnumrecalada: {
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
    Cidmotonave: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cviaje: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cidservicio: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cpuertorcl: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctiporcl: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ntipoagcm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Dfechaarribo: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Choraarribo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechafondeo: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Chorafondeo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfecharcl: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Chorarcl: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechainiope: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Chorasiniope: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechafinope: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Chorafinope: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechazarpe: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Chorazarpe: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechaatraque: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Choraatraque: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdescripcionrcl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cnitagente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nbuquepropio: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Nfacturada: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Nslotchar: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Linactivarrcl: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Dfechalog: {
      type: DataTypes.DATE,
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
    }
  }, {
    tableName: 'TB25RECALADAS'
  });
};
