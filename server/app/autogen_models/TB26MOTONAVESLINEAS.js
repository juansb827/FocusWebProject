/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB26MOTONAVESLINEAS', {
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cidmotonave: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdesmotonave: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cidimo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Callsing: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cnummatricula: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodpais: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB26MOTONAVESLINEAS'
  });
};
