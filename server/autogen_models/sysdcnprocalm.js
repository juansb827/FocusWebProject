/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysdcnprocalm', {
		proc_nomb: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		proc_cont: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		noldano: {
			type: 'NUMERIC',
			allowNull: false
		},
		timestamp_column: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'sysdcnprocalm'
	});
};
