/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB12CTESEVENTOS', {
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Nombres: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Negocio: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Telefonos: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Email: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechacrea: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Tipocliente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB12CTESEVENTOS'
  });
};
