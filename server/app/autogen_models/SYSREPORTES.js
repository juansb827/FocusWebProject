/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SYSREPORTES', {
    Cdescripcion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Creporte: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cgrupo: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Cexcel: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Norden: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Variables: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Caplicacion: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Antes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Despues: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Ejec_graf: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Lenviatab: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Lrepole: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cgrafica: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Letiquetas: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Ncodtd: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: '((0))'
    },
    Sql: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Lreplocal: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Mmetodweb: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Usuario: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Lprotec: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Cformular: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'SYSREPORTES'
  });
};
