/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB12PRECIOEVENTO', {
    Idevento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Cidboleta: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nprecio1: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Nprecio2: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nprecio3: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Ncapacidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB12PRECIOEVENTO'
  });
};
