/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB29PARKTURNOS', {
    Cidturno: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdesturno: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Chorainicio: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Chorafinal: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB29PARKTURNOS'
  });
};
