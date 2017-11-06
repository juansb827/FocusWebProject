/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PAG_PERI', {
    Benefic: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Cen_costo: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Cen_utilid: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ciudad: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ctaxpag: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Detalle: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Fech_base: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Fech_ulpa: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
    },
    Metpag: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Num_pagos: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Tpo_dto: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Tpo_iva: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Tpo_pago: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Tpo_ret: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Val_dto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Val_iva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Val_ret: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Valor_pag: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'PAG_PERI'
  });
};
