/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB26ENVIOSCODECOS', {
    Nnumeroenvio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Cctelna: {
      type: "NCHAR",
      allowNull: false
    },
    Cusercreo: {
      type: "NCHAR",
      allowNull: false
    },
    Dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    },
    Syscomputador: {
      type: "NCHAR",
      allowNull: false
    },
    Filesend: {
      type: "NCHAR",
      allowNull: false
    }
  }, {
    tableName: 'TB26ENVIOSCODECOS'
  });
};
