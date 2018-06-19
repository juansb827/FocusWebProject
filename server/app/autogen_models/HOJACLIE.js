/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HOJACLIE', {
    TERCERO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    TIPO_CLIEN: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
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
    VENDEDOR: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    CIUDAD: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    ZONA: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    CUPO_CRED: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
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
    NUM_LISTA: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    DTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    POR_DESC: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    AGEN_RETEN: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    CAL_INTE: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    INTERES: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    CBLOQUEO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: '0 '
    },
    GRUPO_CLIE: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    SUCURSAL: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    TIPO_PAGO: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    VALOR_ICA: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    DIRECCION: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    OBS_CLIE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CONTACTO_1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TEL_CONT: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TEL_CONT_1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CONTACTO_2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TEL_CONT_2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CONTACTO_3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TEL_CONT_3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CARG_CONT1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CARG_CONT2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CARG_CONT3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    ACCION: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    NEGOCIO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTELSUCU: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCIUSUCU: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNOMC1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCARC1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDIRC1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTELC1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CMAIC1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNOMC2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCARC2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDIRC2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTELC2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CMAIC2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNOMC3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCARC3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDIRC3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTELC3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CMAIC3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNOMC4: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCARC4: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDIRC4: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTELC4: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CMAIC4: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNOMM1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCARM1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDIRM1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTELM1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CMAIM1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNOMM2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCARM2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDIRM2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTELM2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CMAIM2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNOMD1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCARD1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDIRD1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTELD1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CMAID1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNOMD2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCARD2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDIRD2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CTELD2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CMAID2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CDPTO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CCIUD: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CNEMONICO: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    CRUTATRANS: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    TPO_MUERTO: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    DFECPAG: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    DFECFAC: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: ' '
    },
    BLOQUEAR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'HOJACLIE'
  });
};
