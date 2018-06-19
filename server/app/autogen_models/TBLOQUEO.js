/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBLOQUEO', {
    Cbloqueo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cnombre: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Npeso: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TBLOQUEO'
  });
};
