/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysformularios', {
    formulario: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    TABLASFORM: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    MEJE_ANULA: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    APLICACION: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    DESCRIPCIO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    FORM_VARIA: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'sysformularios'
  });
};
