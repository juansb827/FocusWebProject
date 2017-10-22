/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BODEGAS', {
		Bodega: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cgrupaf: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Codcon: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Seccion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nactivar: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cen_costo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'BODEGAS'
	});
};
