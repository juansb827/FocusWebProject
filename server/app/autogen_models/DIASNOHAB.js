/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DIASNOHAB', {
    DFECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CDESCRIP: {
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
    tableName: 'DIASNOHAB'
  });
};
