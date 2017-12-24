/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RETICA', {
    CCODRTICA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CDESCRIP: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NDOCINTER: {
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
    tableName: 'RETICA'
  });
};
