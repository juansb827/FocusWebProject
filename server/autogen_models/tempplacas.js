/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tempplacas', {
		cidactivo: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		cdesgeneral: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PLACA: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F4: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F5: {
			type: DataTypes.STRING,
			allowNull: true
		},
		F6: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'tempplacas'
	});
};
