/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FRMOBJSEG', {
    CNOMFRM: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    CNOMOBJ: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    USUNUM: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    MVALIDA: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'FRMOBJSEG'
  });
};
