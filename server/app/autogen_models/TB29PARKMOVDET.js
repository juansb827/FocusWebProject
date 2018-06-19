/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB29PARKMOVDET', {
    Ciddoc: {
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
    Cturno: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cporteria: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cidtarifa: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nvaltarifa: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nporiva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cidconvenio: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipomov: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnit: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccelular: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Creferencia1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nestado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cplaca: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnomconductor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nmes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cdestaller: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cobservacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nfactura: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nminutos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nparcial: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Niva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ndescuento: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nrecibido: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ncambio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nnumorigen: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Dfechaingreso: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Choraminuto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodbarras: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Narqueo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nnetocaja: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Dfechaarqueo: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB29PARKMOVDET'
  });
};
