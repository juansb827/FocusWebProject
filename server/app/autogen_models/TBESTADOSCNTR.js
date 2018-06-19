/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBESTADOSCNTR', {
    Cestalt: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdesalt: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Naptocntr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cestadocntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdescondcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdesingles: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nhabilitado: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TBESTADOSCNTR'
  });
};
