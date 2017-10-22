/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CODCIIU', {
		NCODCIIU: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		CNOMCIIU: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		CTIPOCIIU: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		ntarifa: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'CODCIIU'
	});
};
