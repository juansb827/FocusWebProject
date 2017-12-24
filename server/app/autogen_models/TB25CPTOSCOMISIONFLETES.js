/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB25CPTOSCOMISIONFLETES', {
    Cidcomiscpto: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' ',
      primaryKey: true
    },
    Ccomisnombre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ccomisesquema: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Cgrupocxc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Nconceptoig: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Ccomisesquereve: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ccomisformula: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Ccategoriacxc: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ' '
    },
    Ntipoagcm: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TB25CPTOSCOMISIONFLETES'
  });
};
