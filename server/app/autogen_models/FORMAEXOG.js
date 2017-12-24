/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FORMAEXOG', {
    Cformato: {
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
    Corigen: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Lbase: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Nversion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'FORMAEXOG'
  });
};
