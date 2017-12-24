/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CABCTOEXO', {
    CFORMATO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CCODCPTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CNOMCTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CORIGEN: {
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
    tableName: 'CABCTOEXO'
  });
};
