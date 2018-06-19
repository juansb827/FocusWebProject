/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BANCOS', {
    BCO_CTVO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    COD_CUENTA: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    BCO_CODIGO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    BCO_FORCON: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    FORMA_IDEN: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    BCO_NOMBRE: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    BCO_SALCON: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    BCO_SALMOV: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    TERCERO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    BCO_TIPO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    TRASINI: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    TRASFIN: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIGCHE: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CONTROL: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    EXTRAMOD: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NUM_CTA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    DIRECCION: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TELEFONO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    GERENTE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTA_EMERG: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCODOFI: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCODTRS: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCODCLA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCODPRG: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNOMFILE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTIPCTA: {
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
    tableName: 'BANCOS'
  });
};
