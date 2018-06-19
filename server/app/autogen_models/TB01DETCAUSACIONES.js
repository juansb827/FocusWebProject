/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB01DETCAUSACIONES', {
    Numero_cpb: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Dfechacausa: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Vica: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ccodriva: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Sucursal: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    N_valref: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Vriva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Vdto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ccodrtfu: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Consignar: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_pdto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Anulado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Refer1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Tipfac: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    C_grpter: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipopago: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnumtb: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Entidad: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdoctb: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ccodrtica: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    N_piva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ter_obl: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Viva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nmes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nconceptoig: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Vrte: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Valor_pes: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Documento: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Esquema: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cconcepto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnumrefer: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cen_utilid: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Refer2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nplazodias: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Moneda: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Valor_usd: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cen_costo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Zona: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Num_item: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Caja: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Refer3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Tasa: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Refer4: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodpais: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ncoddpto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ncodciud: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nnumrecalada: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ncontenedores40: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ncontenedores20: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cfaclegaliza: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nvaloriva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cciudaddestino: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nvalorbase: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nporbase: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cretpernatural: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccostolegaliza: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdesclegaliza: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nporratear: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB01DETCAUSACIONES'
  });
};
