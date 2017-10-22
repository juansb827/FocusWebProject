/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('INV_FCAB', {
		Desc_entra: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Desc_salid: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Estado: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Fecha: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Fecha_crea: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Oper_crea: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Transaccio: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Corigen: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Justifica: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Boleta: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		}
	}, {
		tableName: 'INV_FCAB'
	});
};
