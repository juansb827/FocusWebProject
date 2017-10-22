/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CABREQUISICION11', {
		Nro_req: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Estado: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Estimado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Fecha: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cotranece: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cotrories: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dependenci: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Destino: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Comprado: {
			type: 'BIT',
			allowNull: false
		},
		Necesidad: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Obra: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Prioridad: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Tercero1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Transa: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Anulado: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Lriesgo1: {
			type: 'BIT',
			allowNull: false
		},
		Justifica: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Lriesgo2: {
			type: 'BIT',
			allowNull: false
		},
		Lriesgo3: {
			type: 'BIT',
			allowNull: false
		},
		Lriesgo4: {
			type: 'BIT',
			allowNull: false
		},
		Lriesgo5: {
			type: 'BIT',
			allowNull: false
		},
		Lriesgo6: {
			type: 'BIT',
			allowNull: false
		},
		Mobjetocon: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'CABREQUISICION11'
	});
};
