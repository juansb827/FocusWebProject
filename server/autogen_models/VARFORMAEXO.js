/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('VARFORMAEXO', {
		Cformato: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Num_item: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Nlong: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ctipodato: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nsumacab: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cvaldestino: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdescripcion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'VARFORMAEXO'
	});
};
