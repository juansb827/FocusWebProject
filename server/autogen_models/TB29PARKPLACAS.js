/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB29PARKPLACAS', {
    Cplaca: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cnomconductor: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ccelular: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnit: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Creferencia1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cidconvenio: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechaultent: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechaultsal: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Ntiqueteent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ntiquetesal: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB29PARKPLACAS'
  });
};
