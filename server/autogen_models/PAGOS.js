/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PAGOS', {
		TIPO_PAGO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NOM_TIPO: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		PLAZO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NUM_CUOTAS: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		TPO_MUERTO: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		INTERESES: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		C_CATPAGO: {
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
		tableName: 'PAGOS'
	});
};
