/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB99DETCONCEPTOSIG', {
		Nconceptoig: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		C_nombre: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cforimp: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctituloref1: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ctituloref2: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ctituloref3: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Ctituloref4: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		N_codval3: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		C_esqpes: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		C_esqusd: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		L_obpago: {
			type: 'BIT',
			allowNull: false
		},
		L_obotro: {
			type: 'BIT',
			allowNull: false
		},
		N_interfaz: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		L_obiva: {
			type: 'BIT',
			allowNull: false
		},
		L_obica: {
			type: 'BIT',
			allowNull: false
		},
		L_obdto: {
			type: 'BIT',
			allowNull: false
		},
		L_obcto: {
			type: 'BIT',
			allowNull: false
		},
		N_codcc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		N_codsc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		N_codf7ter: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		L_obref4: {
			type: 'BIT',
			allowNull: false
		},
		L_obcc: {
			type: 'BIT',
			allowNull: false
		},
		Ndefporiva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvaldefe: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ndocinter: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cvalterdef: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		L_obret: {
			type: 'BIT',
			allowNull: false
		},
		L_obsc: {
			type: 'BIT',
			allowNull: false
		},
		Lref1fecha: {
			type: 'BIT',
			allowNull: false
		},
		Ctpocto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncpbref1: {
			type: 'BIT',
			allowNull: false
		},
		L_obpes: {
			type: 'BIT',
			allowNull: false
		},
		L_obref2: {
			type: 'BIT',
			allowNull: false
		},
		C_esqalt: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		L_obusd: {
			type: 'BIT',
			allowNull: false
		},
		L_obter: {
			type: 'BIT',
			allowNull: false
		},
		N_codval4: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		N_codval2: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nsigno: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		N_codval1: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		L_obref1: {
			type: 'BIT',
			allowNull: false
		},
		Cctorelacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		L_obref3: {
			type: 'BIT',
			allowNull: false
		},
		Crefecta1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Crefecta2: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Crefecta3: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Crefecta4: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Crefecta5: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Crefecta6: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Crefecta7: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Crefecta8: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nporratear: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'TB99DETCONCEPTOSIG'
	});
};
