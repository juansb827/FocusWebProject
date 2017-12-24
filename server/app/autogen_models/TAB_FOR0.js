/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TAB_FOR0', {
    Tipo: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    For_descri: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Forma_iden: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    }
  }, {
    tableName: 'TAB_FOR0'
  });
};
