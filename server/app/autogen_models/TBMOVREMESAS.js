/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TBMOVREMESAS', {
    Ctipdoc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ccodcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cdesconductor: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nnumdoc: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    Cnitcliente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnomcliente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechamov: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Nliquidado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nnetopagar: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cplacaorigen: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccelular: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cnitagente: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncdccntr: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ctipocntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cobservacion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctamcntr: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncantidad: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cplacadestino: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncargar: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ndescargar: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntransbordo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cdestranspor: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nmontacarga: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nlavados: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Anulado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Cdestino: {
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
    Nnumdocori: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nhorasmonta: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ntipomov: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Dfechasalida: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Cdescedula: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccodinspector: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nformapago: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ndiasparqueo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cctelna: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Dfechalog: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    Ctipdocori: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nparqueo: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nsaldocxc: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cusuariolog: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ndescuento: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Notros: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Npesocarga: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nvalrecibido: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Syscomputador: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nmovinterno: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TBMOVREMESAS'
  });
};
