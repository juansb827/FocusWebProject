/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB29PARKCONVENIOS', {
    Cidconvenio: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdesconvenio: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechainicial: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Ninactivo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nplazo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cidtarifa: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Narriendo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cnitcliente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB29PARKCONVENIOS'
  });
};
