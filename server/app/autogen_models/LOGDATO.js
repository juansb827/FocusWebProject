/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOGDATO', {
    APLIC: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    EQUIPO: {
      type: DataTypes.CHAR,
      allowNull: false,
      primaryKey: true
    },
    ESTRUC: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    FISICO: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    LLAVEREG: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    SUCESO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true
    },
    USUARIO: {
      type: DataTypes.CHAR,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'LOGDATO'
  });
};
