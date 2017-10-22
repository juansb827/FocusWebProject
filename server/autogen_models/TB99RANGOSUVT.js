/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB99RANGOSUVT', {
		Ccodigouvt: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ntarifauvt: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntarrangofinal: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Nporretencion: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nporbaseparis: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nporparafiscal: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nporbaseuvt: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cidcodcuenta: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB99RANGOSUVT'
	});
};
