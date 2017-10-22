/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LISTAPL', {
		NUMERAL: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NUM_APLIC: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NOM_APLIC: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		OPC_APLIC: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		NOM_OPCION: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		PROMPT: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		TIPO_EJECU: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		TECLA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		LABEL_TEC: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		LINEACOMAN: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		HABILITADA: {
			type: 'BIT',
			allowNull: false
		},
		MENU_APLIC: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		TIPO_APLIC: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		SCHEME: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		LIST_PARAM: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		SKIP: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		COND_PARAM: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		MENSAJE: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		APL_BMP: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		APL_ICO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		TAB_ANEXAS: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DIR_APLICA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		INI_APLICA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		LIB_APLICA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		LIB_CLASE: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		SISTEMA: {
			type: 'BIT',
			allowNull: false
		},
		LIB_AYUDA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		PER_GRUP: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		GRUP_USU: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		USUARIOS: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'LISTAPL'
	});
};
