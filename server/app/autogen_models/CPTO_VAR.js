/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CPTO_VAR', {
    COD_CPTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DES_CPTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TIP_CPTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    IND_CPTO: {
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
    tableName: 'CPTO_VAR'
  });
};
