/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FAC_GEN', {
    Ccodtran: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ciudad: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Orden_com: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ret_m: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Com_entga: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Otros_m: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Remision: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '((0))'
    },
    Concepto: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ord_trab: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dcto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Mcia_m: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Transaccio: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Anticipo_m: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ord_servic: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Iva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Dcto_m: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Prc_otros: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Doc_rem: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Familia: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Fecha_fac: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
    },
    Finca: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodicon: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Tipfac: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ope_cre: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Mes: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Grupo_clie: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ord_trabin: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Codi_desp: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Doc_ped: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Iva_m: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Tpo_cuotas: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Num_guia: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Num_orpr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Num_ped: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '((0))'
    },
    Num_sapt: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Obsfac: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Otros: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Tiene_anu: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Dev_docfac: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Dev_numfac: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '((0))'
    },
    Por_ret: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    P_otros_m: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Tipo_clien: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Num_cuotas: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Sucursal: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Documento: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ica: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Anticipo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Num_fac: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Obsrem: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipocon: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ret: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Crutatrans: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Estado: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Mcia: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nmes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Num_anti: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Num_contr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Trs_inv: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Vendedor: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Zona: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Num_cotiz: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Tipo_pago: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    }
  }, {
    tableName: 'FAC_GEN'
  });
};
