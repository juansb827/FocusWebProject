/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_COMMENT', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		COMMENT_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		OBJ_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		COMMENT_TEXT: {
			type: DataTypes.TEXT,
			allowNull: false
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
		tableName: 'RB_COMMENT'
	});
};
