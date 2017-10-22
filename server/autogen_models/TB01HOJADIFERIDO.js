/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB01HOJADIFERIDO', {
		Diferido: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Concepto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ajusteniif: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cen_utilid: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cuotfijas: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fecha: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Fecha_crea: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Num_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Numero_cpb: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Tot_creditos: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tot_debitos: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Totajustes: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Valor_dif: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cod_cuenta: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB01HOJADIFERIDO'
	});
};
