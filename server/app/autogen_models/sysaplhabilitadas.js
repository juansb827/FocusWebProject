/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysaplhabilitadas', {
    NUM_APLIC: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    EMPRESA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    HABILITADA: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'sysaplhabilitadas'
  });
};
