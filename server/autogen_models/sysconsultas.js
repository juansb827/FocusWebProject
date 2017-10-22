/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysconsultas', {
		Ncodcon: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Camp_val: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		cnomtabla: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tag_val: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Descripcio: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fun_val: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tit_val: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Relt_val: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Catrae_val: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnemonico: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Col1_val: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Col2_val: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Lisc_val: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Reli_val: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Rell_val: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Mensaj_err: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Val_aux: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Val_nomfis: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ejec_memo: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Fil1_val: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Fil2_val: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Filt_val: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'sysconsultas'
	});
};
