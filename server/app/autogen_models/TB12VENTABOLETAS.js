/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB12VENTABOLETAS', {
    Ctipodoc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Numerodoc: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Dfechamov: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Idevento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cidboleta: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nprecio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntotal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nabono: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Num_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Numdocrefer: {
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
    Nsigno: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Syscomputador: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nmes: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB12VENTABOLETAS'
  });
};
