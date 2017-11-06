/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBHISTOCNTR', {
    Ccodloccntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnitcliente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnumstacking: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfecsalcntr: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodevelog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipdocori: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodpais: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cestadocntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodciud: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ccodsitcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Dfecentcntr: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Num_item: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Nnumdocori: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ncoddpto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cestoricntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cestfincntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    nNumDocSal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    SYSCOMPUTADOR: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CGRUPOMOV: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    CUSOLOGICO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    DFECHALOG: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'TBHISTOCNTR'
  });
};
