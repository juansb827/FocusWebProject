/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11CABENTRADAS', {
		Nnumdocent: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Cfacturaprov: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cnumbl: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnumpoli: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipdocfac: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ctipdocorden: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ctipdocent: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Nfacturado: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cidtransaccion: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nnumdocfac: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Obra: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cusuariolog: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Anulado: {
			type: 'BIT',
			allowNull: true
		},
		Cclacon: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechaent: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Nnumdocorden: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Cremisionprov: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cidproveedor: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cobservacion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB11CABENTRADAS'
	});
};
