/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB99CTASIMPUESTOTERCERO', {
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cctaretencion: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cctaiva: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cctaica: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cctaivaretecre: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cctaicaretenido: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Cctaporpagar: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ntarret: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntariva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntarica: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntarivaret: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntaricaret: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cctaivaretedeb: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB99CTASIMPUESTOTERCERO'
	});
};
