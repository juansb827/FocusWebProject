/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOJAPROV', {
    TERCERO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    CONTACTO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    CARGO_CONT: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    CUPO_CRED: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    COMPANOANT: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    COMPESTANO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    FECHULTCOM: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
    },
    TPO_CUOTAS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUM_CUOTAS: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    TIPO_PAGO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    TPO_MUERTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CIUDAD: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    LISTFIJO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'HOJAPROV'
  });
};
