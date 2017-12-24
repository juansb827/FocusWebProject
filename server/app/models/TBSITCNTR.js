/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBSITCNTR', {
    Ccodsitcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdessitcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipsitio: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodciud: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ncodpais: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ncoddpto: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TBSITCNTR'
  });
};
