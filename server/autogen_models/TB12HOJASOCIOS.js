/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB12HOJASOCIOS', {
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Nombres: {
      type: DataTypes.STRING,
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
    Telefono: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Email: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechacobro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
    },
    Numaccion: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nvaloraccion: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nvalortotal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Numcuotas: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cusuariolog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Syscomputador: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nvalcuota: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Observacion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cestado: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB12HOJASOCIOS'
  });
};
