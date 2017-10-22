/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PROCESOSFOCUS', {
		Pro_fecha: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Proc_bloq: {
			type: 'BIT',
			allowNull: false
		},
		Proceso: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cusuario: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cmaquina: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfecha: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cmodulo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'PROCESOSFOCUS'
	});
};
