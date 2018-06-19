/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DSCTOVOL', {
    CANT_FIN: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CANT_INI: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    DESCTO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '((0))'
    },
    NUM_ITEM: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    REFERENCIA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    }
  }, {
    tableName: 'DSCTOVOL'
  });
};
