/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBINSPECTORES', {
    Cnominspector: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodinspector: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ndesactivar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nhabilitado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CEN_COSTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TBINSPECTORES'
  });
};
