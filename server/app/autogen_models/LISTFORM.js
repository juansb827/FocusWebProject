/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LISTFORM', {
    Usuarios: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Per_grup: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Tablasform: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Aplicacion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Descripcio: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Form_varia: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Meje_anula: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Formulario: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    }
  }, {
    tableName: 'LISTFORM'
  });
};
