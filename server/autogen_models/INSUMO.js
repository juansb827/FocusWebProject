/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('INSUMO', {
		REFERENCIA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		COD_INSU: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NOMBRE: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		IVA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		COD_TINS: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		COD_GINS: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		AFE_INV: {
			type: 'BIT',
			allowNull: false
		},
		VALOR: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		UNI_MEDI: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		COD_MARCA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		VALOR_ADM: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VALOR_IMP: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		VALOR_UTI: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		TODO_COSTO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CON_IVA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		VALOR_SIVA: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		BLOQUEAR: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'INSUMO'
	});
};
