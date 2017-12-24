/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysdcncampos', {
    caplicacion: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cnomtabla: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_nombre: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_tipo: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_long: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cam_dec: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    cam_desgen: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_descri: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cam_oblig: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cam_msgcap: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_valida: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_msgerr: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_usuari: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cam_inicia: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_format: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    primaria: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ind_primar: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    nulos: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    justifica: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_rellen: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_clase: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_tnt: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cam_titulo: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    topic_help: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    topic_id: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    norden: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LautoNumer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'sysdcncampos'
  });
};
