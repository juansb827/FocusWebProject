/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SYSUSUARIOS', {
		Usuabre: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Usunom: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccedula: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cfiltro1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cfiltro2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdependencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Descripcio: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Bloqueo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Caduca: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cambiar: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Desactivar: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Desb_mnal: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Usufec: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		N_intentos: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		N_segundos: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Usucaduca: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Usucla: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Usufcla: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Usufult: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Usuniv: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Usunum: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Fec_bloque: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Grupos: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Iniciar: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cmail: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Naprobarwork: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'SYSUSUARIOS'
	});
};
