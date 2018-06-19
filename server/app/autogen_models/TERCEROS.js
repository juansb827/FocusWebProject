/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TERCEROS', {
    Ter_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
    },
    Ncodciiu: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ncoddpto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ter_tipcta: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ter_direcc: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ter_ciudad: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ncliente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ter_codigo: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ter_entid: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Tipo_ent: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ter_dire2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nproveedor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ter_tipoid: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ter_telefo: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Cnom1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ter_sigla: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ter_digver: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Nempleado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cciud: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nsocio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ccodica: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ter_aaereo: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Tipo_ctr: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Apl_ica: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cnom2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodciud: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ter_ciubta: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Email: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ter_fax: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Nvendedor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cdpto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ter_femovi: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: ' '
    },
    Ter_tipcon: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Capl1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ter_razons: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Tercero: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ter_cta: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ter_ban: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ter_resolu: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ter_regiva: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Capl2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncodpais: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ter_nits: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ntarifaica: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
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
    Cusuariologmod: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechalogmod: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Syscomputadormo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Cidactividad: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nobligacree: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ccodigocree: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'TERCEROS'
  });
};
