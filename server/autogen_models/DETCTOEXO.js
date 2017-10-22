/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DETCTOEXO', {
		Num_item: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Cformato: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Ccodcpto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cod_cuenta: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Mde_tmvto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nval2base: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nvalmonto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Signo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cvaldestino: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Excluir: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnitfijo: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Corigen: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'DETCTOEXO'
	});
};
