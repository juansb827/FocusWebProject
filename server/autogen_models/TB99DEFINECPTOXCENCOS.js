/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB99DEFINECPTOXCENCOS', {
		Nconceptoig: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Variable: {
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
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nporaplicar: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Esquema: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB99DEFINECPTOXCENCOS'
	});
};
