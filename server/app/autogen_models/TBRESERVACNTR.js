/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBRESERVACNTR', {
    Dfechamov: {
      type: DataTypes.DATE,
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
      defaultValue: ' '
    },
    Cnitcliente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nestado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Num_item: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
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
    Cnumreserva: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cobserva: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TBRESERVACNTR'
  });
};
