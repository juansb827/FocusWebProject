/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZONA', {
    COD_ZONA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    DESCRIPC: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    BODEGA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CEN_COSTO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    SUB_COSTO: {
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
    tableName: 'ZONA'
  });
};
