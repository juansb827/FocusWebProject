/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB26CONTAINERBLOQUEADOS', {
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ccodcntrini: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ccodcntrfin: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
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
    Syscomputador: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB26CONTAINERBLOQUEADOS'
  });
};
