/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ENTIDAD', {
		ENTIDAD: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		NOMBRE: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		TIPO: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		COMISION: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		CCODENT: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		NLONCTAMIN: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		NLONCTAMAX: {
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
		tableName: 'ENTIDAD'
	});
};
