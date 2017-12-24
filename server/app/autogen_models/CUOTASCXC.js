/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CUOTASCXC', {
    CFACTURA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    TERCERO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NCUOTA: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DFCUOTA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    DFVTO: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    NVALCUOPES: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NVALINTPES: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NVALOTRPES: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NVALCUOUSD: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NVALINTUSD: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NESTADO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NPAGADA: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'CUOTASCXC'
  });
};
