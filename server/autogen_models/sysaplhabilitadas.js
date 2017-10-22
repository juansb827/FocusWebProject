/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysaplhabilitadas', {
		NUM_APLIC: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		EMPRESA: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		HABILITADA: {
			type: 'BIT',
			allowNull: false
		}
	}, {
		tableName: 'sysaplhabilitadas'
	});
};
