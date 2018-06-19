/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysversioncs', {
    tfecver: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cversion: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cdescrip: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    mdirector: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    marchivos: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ltodo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    timestamp_column: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'sysversioncs'
  });
};
