/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_LIST_ITEM', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ITEM_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SOURCE_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ORDER_NO: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		IS_DEFAULT: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		ITEM_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ITEM_CODE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		MAIN_ITEM_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		}
	}, {
		tableName: 'RB_LIST_ITEM'
	});
};
