/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DOCUMENTOS', {
    Doc_numdoc: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '((0))'
    },
    Doc_numven: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Documento: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Fmt_impr: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Imp_inmed: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Ncia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nconmes: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Ndocinter: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    No_reimpr: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Num_copias: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Aplicaci: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Doc_descri: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Doc_items: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Doc_numaut: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Doc_numcop: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Prot_impre: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    },
    Tope: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Transa: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ciddescriptor: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: ' '
    }
  }, {
    tableName: 'DOCUMENTOS'
  });
};
