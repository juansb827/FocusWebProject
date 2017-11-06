/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBMOVPATIOS', {
    Insnro: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Instii: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insnav: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insfec: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inscon: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Instip: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insfef: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inscom: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insusu: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inscnd: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insccnd: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Instrs: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insplc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Instas: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Inssts: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inslle: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insdev: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insbln: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inscpn: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insdan: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insrep: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insmat: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insinp: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inslad: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Inslod: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Insfon: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Instam: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inshor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Inscsm: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Insfme: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inscan: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Insqty: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insladt: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Inslodt: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Instamt: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inshort: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Inscsmt: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Insfmet: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inscant: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Inssoxi: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Instipc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insstsc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insubi: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inspos: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inswox: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inswri: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insres: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inspat: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insusc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Insfhc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Inshrc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TBMOVPATIOS'
  });
};
