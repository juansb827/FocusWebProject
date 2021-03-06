/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GRUPOINV', {
    GRUPO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NOMBRE: {
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
    tableName: 'GRUPOINV'
  });
};
