/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TASAS', {
    CCODTASA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CNOMTASA: {
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
    tableName: 'TASAS'
  });
};
