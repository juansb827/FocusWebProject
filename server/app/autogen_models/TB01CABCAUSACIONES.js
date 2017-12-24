/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB01CABCAUSACIONES', {
    Documento: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Numero_cpb: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechafac: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipopago: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechavto: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cnumerofacprov: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Npordto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
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
    Cen_costo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Anulado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Caprobado: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnumeroorden: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Mobservacion: {
      type: DataTypes.TEXT,
      allowNull: false
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
    Cusuariolog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Syscomputador: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cconcepto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Caja: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nplazodias: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cen_utilid: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ctipdocradica: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Nnumradicacion: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Dfecharadica: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cuseraprobador: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cidactividad: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ntarifaxmil: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nvalorfactura: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nvalorparafis: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Dfechacausa: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TB01CABCAUSACIONES'
  });
};
