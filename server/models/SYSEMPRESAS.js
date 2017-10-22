/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SYSEMPRESAS', {
		Idcodigo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Empresa: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nit: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Usuario_bd: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Clave_bd: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Servidor_bd: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Instancia: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Driver_bd: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Producto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Prefijo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Logo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Logofrm: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Icono: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Version: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cmaximo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dirimgagen: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nhabilweb: {
			type: 'BIT',
			allowNull: false
		},
		Bd_base: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ckeycodigo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'SYSEMPRESAS'
	});
};
