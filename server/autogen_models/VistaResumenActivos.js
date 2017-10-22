/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('VistaResumenActivos', {
		CEN_UTILID: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		CIDACTIVO: {
			type: DataTypes.STRING,
			allowNull: false
		},
		NNIIF: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		AC: {
			type: 'NUMERIC',
			allowNull: true
		},
		AD: {
			type: 'NUMERIC',
			allowNull: true
		},
		CO: {
			type: 'NUMERIC',
			allowNull: true
		},
		ID: {
			type: 'NUMERIC',
			allowNull: true
		},
		DN: {
			type: 'NUMERIC',
			allowNull: true
		},
		ME: {
			type: 'NUMERIC',
			allowNull: true
		},
		OT: {
			type: 'NUMERIC',
			allowNull: true
		},
		SV: {
			type: 'NUMERIC',
			allowNull: true
		}
	}, {
		tableName: 'VistaResumenActivos'
	});
};
