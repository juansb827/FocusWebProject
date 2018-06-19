/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysaplest', {
    CNOMAPLICA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NANO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NMES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NCERRADO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DFECCREA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    DFECMODI: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    CUSUCREA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CUSUMODI: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    EQUIPO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'sysaplest'
  });
};
