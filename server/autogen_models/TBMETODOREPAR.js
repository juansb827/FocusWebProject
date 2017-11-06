/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBMETODOREPAR', {
    Ccodmetlna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ntartipo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ntartamano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ctipcalculo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdes2met: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cgruporep: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodmet: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cdes1met: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodisomet: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TBMETODOREPAR'
  });
};
