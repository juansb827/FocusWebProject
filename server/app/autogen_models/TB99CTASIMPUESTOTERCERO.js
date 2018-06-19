/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB99CTASIMPUESTOTERCERO', {
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cctaretencion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cctaiva: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cctaica: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cctaivaretenido: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cctaicaretenido: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cctaporpagar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ntarret: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntariva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntarica: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntarivaret: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntaricaret: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TB99CTASIMPUESTOTERCERO'
  });
};
