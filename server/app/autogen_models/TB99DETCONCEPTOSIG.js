/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB99DETCONCEPTOSIG', {
    Nconceptoig: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    C_nombre: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cforimp: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ctituloref1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ctituloref2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ctituloref3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ctituloref4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    N_codval3: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    C_esqpes: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    C_esqusd: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    L_obpago: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    L_obotro: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    N_interfaz: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    L_obiva: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    L_obica: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    L_obdto: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    L_obcto: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    N_codcc: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_codsc: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_codf7ter: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    L_obref4: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    L_obcc: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ndefporiva: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nvaldefe: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ndocinter: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Cvalterdef: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    L_obret: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    L_obsc: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Lref1fecha: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ctpocto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ncpbref1: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    L_obpes: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    L_obref2: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    C_esqalt: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    L_obusd: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    L_obter: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    N_codval4: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_codval2: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Nsigno: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    N_codval1: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    L_obref1: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Cctorelacion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    L_obref3: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Crefecta1: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Crefecta2: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Crefecta3: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Crefecta4: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Crefecta5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Crefecta6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Crefecta7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Crefecta8: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Nporratear: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB99DETCONCEPTOSIG'
  });
};
