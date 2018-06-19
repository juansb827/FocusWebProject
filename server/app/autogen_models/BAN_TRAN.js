/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BAN_TRAN', {
    BCO_CODIGO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    TRANSACCIO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    DOCUMENTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NATURALEZA: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    COLUMNA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUM_ITEM: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    BAN_TRAN: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'BAN_TRAN'
  });
};
