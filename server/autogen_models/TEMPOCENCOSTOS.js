/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TEMPOCENCOSTOS', {
		GRUPO: {
			type: DataTypes.STRING,
			allowNull: true
		},
		AREA: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DESCRIPCION: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CENCOSTO: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'TEMPOCENCOSTOS'
	});
};
