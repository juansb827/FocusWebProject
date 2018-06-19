/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBCABFACTURA', {
    Mconcepto: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Niva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Creferencia: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nitem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Dfecinifac: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Dfecfinfac: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cnitagente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nporret: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nsubtotal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Dfechafac: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Nnumerofac: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Nprocesar: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Cplantilla: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
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
    Nmes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nporiva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ctipodoc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nsubtotusd: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nivausd: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Mcptousd: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nunidades: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Mobservaciones: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'TBCABFACTURA'
  });
};
