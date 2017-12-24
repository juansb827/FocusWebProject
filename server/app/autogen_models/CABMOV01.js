/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CABMOV01', {
    Documento: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Numero_cpb: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Num_ori: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Mes: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Fecha_crea: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
    },
    Cmoneda: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Bco_codigo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cheque: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ciudad_gir: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Oper_uact: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Mge_concpb: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Mge_lote: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Observa: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Doc_ori: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Aplica_cre: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Attach: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nmes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Oper_crea: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Fecha_uact: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
    },
    Dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cusuariolog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Syscomputador: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CABMOV01'
  });
};
