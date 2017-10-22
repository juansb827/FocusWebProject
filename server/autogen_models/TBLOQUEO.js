/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TBLOQUEO', {
		CBLOQUEO: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		CNOMBRE: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		NPESO: {
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
		tableName: 'TBLOQUEO'
	});
};
