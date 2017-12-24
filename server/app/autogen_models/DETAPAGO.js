/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DETAPAGO', {
    DOCUMENTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    NUMERO_CPB: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    TIP_PAGO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ENTIDAD: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    OBSERVACI: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    NRO_CHEQ: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    VALOR: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    PLAZA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    FECHA_CREA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    FECHA_CONS: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    COD_VEND: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ZONA: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    EMISOR: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ESTADO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    DESCRIPCIO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    POR_DSCTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    POR_IMPTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    NUM_ITEM: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    MES: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ANULADO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    GIRADOR: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    TELEFONO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    AUTORIZO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NUM_TARJE: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    RECIBO: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DOC_REC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NUM_REC: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    BCO_CONSIG: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NUM_CONSIG: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NANO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NMES: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CCODTIPTAR: {
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
    tableName: 'DETAPAGO'
  });
};
