/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CIUDAD', {
    CODIGO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DESCRIPC: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CIUDAD'
  });
};
