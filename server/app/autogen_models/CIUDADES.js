/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CIUDADES', {
    Cnomciud: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodciud: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ncoddpto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ncodpais: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Cnomloc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nptonaviero: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'CIUDADES'
  });
};
