/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysdcntabdina', {
		caplica: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		ncodtd: {
			type: 'NUMERIC',
			allowNull: false
		},
		cdescrip: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		msql: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		cpagina: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		cfilas: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		ccolumnas: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		cdatos: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		nformat: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		lorigenfox: {
			type: 'BIT',
			allowNull: false
		}
	}, {
		tableName: 'sysdcntabdina'
	});
};
