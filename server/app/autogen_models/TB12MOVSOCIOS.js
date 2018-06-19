/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB12MOVSOCIOS', {
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ncuota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Dfechacuota: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Nvalcuota: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ncancelada: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Dfechapago: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Nvalrecaudo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Observacuota: {
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
    Syscomputador: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB12MOVSOCIOS'
  });
};
