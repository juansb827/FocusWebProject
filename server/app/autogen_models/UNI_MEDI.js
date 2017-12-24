/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UNI_MEDI', {
    CODIGO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DESCRIP: {
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
    tableName: 'UNI_MEDI'
  });
};
