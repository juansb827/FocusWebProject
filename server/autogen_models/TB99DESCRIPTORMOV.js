/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB99DESCRIPTORMOV', {
		Ciddescriptor: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cnomdescriptor: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Caplicacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Npideunidades: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Npidevalores: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsumatotal: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nimprime: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cidreferencia1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidreferencia2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB99DESCRIPTORMOV'
	});
};
