/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_PAGE_SECTION', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SECTION_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PAGE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		ORDER_NO: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		SECTION_TITLE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BORDER_STYLE: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		COLUMNS: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		VIEW_TAB_NO: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		PAGE_COL_NO: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		IS_COLLAPSABLE: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_DEFAULT: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		HIDE_MOBILE: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		DO_NOT_SYNCH: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		SHOW_IN_DESKTOP: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: 'Y'
		},
		SHOW_IN_SMART_PHONE: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: 'Y'
		},
		SHOW_IN_TABLET: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: 'Y'
		}
	}, {
		tableName: 'RB_PAGE_SECTION'
	});
};
