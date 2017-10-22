/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB11RECURSOSGASTOS', {
		Cidrecurso: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cdesrecurso: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nordenador: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nptofin: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'TB11RECURSOSGASTOS'
	});
};
