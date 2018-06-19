/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysambiente', {
    APLICACION: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    TIPO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CODIGO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CNOMPARA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CVALOR: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CLABEL: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTIPOVAR: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NLONGITUD: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NDECIMALES: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CMASENTRA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CAYUDA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CVALIDACI: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CERRORMES: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    DFECCREA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'sysambiente'
  });
};
