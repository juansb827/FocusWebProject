/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB26PLANTILLACODECOS', {
    Cidmodelo: {
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
    Norden: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Cgrupodato: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccondicion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Cexpresionlibre: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Ccodecograbar: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Nenviarcorreo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nenviarcostos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cctocorreo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cccccorreo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB26PLANTILLACODECOS'
  });
};
