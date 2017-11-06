/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DPTOS', {
    NCODDPTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CNOMDPTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NCODPAIS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'DPTOS'
  });
};
