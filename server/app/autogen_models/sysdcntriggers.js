/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysdcntriggers', {
    tri_estru: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    tri_nombre: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    item: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    tri_conten: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    noldano: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    timestamp_column: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'sysdcntriggers'
  });
};
