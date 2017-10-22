/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_RSS_FEED_DEF', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		TITLE_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		PUB_DATE_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		DESCRIPTION_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		CONTENT_TYPE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CREATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		},
		UPDATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		UPDATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'RB_RSS_FEED_DEF'
	});
};
