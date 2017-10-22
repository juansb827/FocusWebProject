/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('HOJAPROV', {
		Contacto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cupo_cred: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Listfijo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_cuotas: {
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
		Tipo_pago: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Tpo_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tpo_muerto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Compestano: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Fechultcom: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Cargo_cont: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ciudad: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Companoant: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nprecioconiva: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'HOJAPROV'
	});
};
