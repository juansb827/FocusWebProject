/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB01HISCUOTAS', {
		Fecha_crea: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Najustado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nano: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nporajus: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nsaldo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_cuota: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Numero_cpb: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalajuste: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Valor_cuo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Amortizado: {
			type: 'BIT',
			allowNull: false
		},
		Dfecajuste: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Diferido: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fech_amort: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cod_cuenta: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'TB01HISCUOTAS'
	});
};
