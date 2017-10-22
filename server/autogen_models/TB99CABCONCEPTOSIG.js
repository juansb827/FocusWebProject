/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB99CABCONCEPTOSIG', {
		Cdescripcion: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cdocumento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ngrupodoc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccpto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cvaldefault1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nsol11: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol12: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol10: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol13: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cvaldefault2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cvaldefault3: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nsol01: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol02: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol03: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol04: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol05: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol06: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol07: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol09: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nsol08: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cformato1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cformato2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB99CABCONCEPTOSIG'
	});
};
