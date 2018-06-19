/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB25RECARGOSXBLS', {
    Cidrecargo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cnombrerecargo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nsumafletes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nsumacomision: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cesquema: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccategoriacxc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cgrupocxc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccondicion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Nfijofactura: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nprioridad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cod_cuenta: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB25RECARGOSXBLS'
  });
};
