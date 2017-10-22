/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11PROVEXGRUPO', {
		Cali_calid: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cali_descu: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cali_plazo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cali_preci: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Capa_respu: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cumplimien: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Grupo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Proveedor: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'TB11PROVEXGRUPO'
	});
};
