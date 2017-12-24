/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysdcnasigna', {
    ncodasig: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    masigna: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cdesactiva: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cindicefrm: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cdescrip: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    dfeccrea: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dfecmod: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lusuario: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    num_item: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'sysdcnasigna'
  });
};
