/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBLOGIMPORTA', {
    Cidproc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Tfecproc: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cfileproc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cfilegen: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cusuario: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nregsproc: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Naceptados: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nrechazado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nestado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TBLOGIMPORTA'
  });
};
