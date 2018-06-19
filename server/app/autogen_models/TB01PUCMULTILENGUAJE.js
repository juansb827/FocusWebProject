/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB01PUCMULTILENGUAJE', {
    Cidlenguaje: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ccodcuenta: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdesotroidioma: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB01PUCMULTILENGUAJE'
  });
};
