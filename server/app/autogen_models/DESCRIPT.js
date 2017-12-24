/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DESCRIPT', {
    DESCRIP: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    XP_DDESCRI: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    XP_DTMVTO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    XP_DUNID: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_DVALUNI: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_DVALTOT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_DCALCOS: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_DINREP: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_DCONAJ: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_DSINAJ: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_COSSIG: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_OBLCC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_OBLDR1: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_OBLDR2: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_LDESAFI: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    XP_ESQINV: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    XP_TIPDOC: {
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
    tableName: 'DESCRIPT'
  });
};
