/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB26TRANSVACIADOS', {
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
    Dfechamov: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechafinal: {
      type: DataTypes.DATE,
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
    Clineaorigen: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodcntrorigen: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Csellosorigen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Clineadestino: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodcntrdestino: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Csellosdestino: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodinspector: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nfacturado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cdetallecarga: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cobservacion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnumerobl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB26TRANSVACIADOS'
  });
};
