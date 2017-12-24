/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DOCXMODULO', {
    CMODULO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DOCUMENTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DFECCREA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    CUSUARIO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'DOCXMODULO'
  });
};
