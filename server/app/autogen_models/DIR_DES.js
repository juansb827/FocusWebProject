/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DIR_DES', {
    CODI_DESP: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: '0 '
    },
    DIRECCION: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    CIUDAD: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    TELEFONO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    APARTADO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    TERCERO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    FAX: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    SUCURSAL: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NUM_ITEM: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    CRUTATRANS: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    FINCA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'DIR_DES'
  });
};
