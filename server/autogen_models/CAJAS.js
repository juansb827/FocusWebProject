/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CAJAS', {
		CJA_CODIGO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CJA_NOMBRE: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		COD_CUENTA: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		FORMA_IDEN: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		DOCUMENTO: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		ESTATUS: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CAJERO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'CAJAS'
	});
};
