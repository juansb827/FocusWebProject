/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB12MOVSOCPAGOS', {
    Ctipodoc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Numerodoc: {
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
    Nvalrecibido: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Tercero: {
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
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nmes: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB12MOVSOCPAGOS'
  });
};
