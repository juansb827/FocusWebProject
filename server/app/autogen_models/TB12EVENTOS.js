/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB12EVENTOS', {
    Idevento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Cdescripcion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncoddpto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ncodciud: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Dfecinicial: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Dfecfinal: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Nactivo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
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
    Dfechacrea: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodpais: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB12EVENTOS'
  });
};
