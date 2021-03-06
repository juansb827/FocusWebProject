/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CENNEGOCIOS', {
    CEN_UTILID: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CUT_DESCRI: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    CUT_NIVEL: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CUT_TERMIN: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CUT_DIGANI: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CUT_DIGSNI: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CUT_ACTIVO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CENNEGOCIOS'
  });
};
