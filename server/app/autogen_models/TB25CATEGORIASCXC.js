/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB25CATEGORIASCXC', {
    Ccategoriacxc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ccategoriadesc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cgrupocxc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nconceptoig: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB25CATEGORIASCXC'
  });
};
