/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CODCIIU', {
    NCODCIIU: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    CNOMCIIU: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTIPOCIIU: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ntarifa: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CODCIIU'
  });
};
