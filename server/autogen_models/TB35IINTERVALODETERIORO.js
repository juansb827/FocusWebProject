/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB35IINTERVALODETERIORO', {
		Ndiainicial: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Ndiafinal: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Ntopeanual: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ntasaefectiva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'TB35IINTERVALODETERIORO'
	});
};
