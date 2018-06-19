/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CODJUR', {
    CODJUR: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NOMJUR: {
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
    tableName: 'CODJUR'
  });
};
