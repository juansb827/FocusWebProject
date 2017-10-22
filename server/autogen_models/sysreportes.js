/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysreportes', {
		ANTES: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		CAPLICACION: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CFORMULAR: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CDESCRIPCION: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		DESPUES: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		EJEC_GRAF: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		LENVIATAB: {
			type: 'BIT',
			allowNull: false
		},
		LREPOLE: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NOTES: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		CEXCEL: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CREPORTE: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		SQL: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CGRAFICA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		USUARIO: {
			type: 'BIT',
			allowNull: false
		},
		VARIABLES: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		LPROTEC: {
			type: 'BIT',
			allowNull: false
		},
		NORDEN: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		LREPLOCAL: {
			type: 'BIT',
			allowNull: false
		},
		MMETODWEB: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		CGRUPO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NCODTD: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		LETIQUETAS: {
			type: 'BIT',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'sysreportes'
	});
};
