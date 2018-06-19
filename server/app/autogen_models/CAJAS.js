/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CAJAS', {
    Cod_cuenta: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Cajero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cja_codigo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cja_nombre: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Documento: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Estatus: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Forma_iden: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    }
  }, {
    tableName: 'CAJAS'
  });
};
