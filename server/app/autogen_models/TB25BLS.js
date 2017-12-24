/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB25BLS', {
    Nnumerobl: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Ctipdocbl: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Nnumrecalada: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cidservicio: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nmes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Cshipper: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Cnotifyparty: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Cprecarriage: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cidmotonave: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cplacereceipt: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cportloading: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cplacedelivery: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctypemove: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechabl: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Clugarbl: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nblshijos: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ccondicionflete: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ntotalfletes: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Lesblmemo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Lesbltransbordo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Cconsignee: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Cpordischarge: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnumblmaster: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Lfletado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Nvaluedeclared: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nrate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cpagaderoen: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nlocalcurrency: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntotalprepaid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntotalcollect: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cdescripcion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cviaje: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctiporcl: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nfacturado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ncerrado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ncomisionado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ntotkiloscntr: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntotkilossuelta: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntotm3cntrs: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntotm3suelta: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Lexentothc: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Lexentodocfee: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ntotprepacomis: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntotcollecomis: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ccomisgenerada: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnitfactura: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ntotalcntr: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cexporefer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Cfwdagenrefer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Cnotifyrounting: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Cattachinfo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Lattachflag: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Cnumbloriginal: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Csucursalcte: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ltienenotacorre: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ncargodescorta: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cbuquemadre: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Lbladicional: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Cmonedaedi: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cbookinedi: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Carchivoedi: {
      type: DataTypes.CHAR,
      allowNull: false,
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
    tableName: 'TB25BLS'
  });
};
