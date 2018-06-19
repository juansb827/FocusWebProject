/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MOVTASAS', {
    CCODTASA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DFECTASA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NVALTASA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'MOVTASAS'
  });
};
