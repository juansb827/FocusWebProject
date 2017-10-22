/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_PAGE_CELL', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CELL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SECTION_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CLASS_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ORDER_NO: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ALIGNMENT: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		FIELD_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		TEXT: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'RB_PAGE_CELL'
	});
};
