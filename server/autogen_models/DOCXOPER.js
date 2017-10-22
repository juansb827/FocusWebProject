/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DOCXOPER', {
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Id_ope: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		}
	}, {
		tableName: 'DOCXOPER'
	});
};
