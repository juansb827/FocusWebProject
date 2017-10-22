/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_QUESTION_DEF', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		QUESTION_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CATEGORY_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		CLASS_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		DISPLAY_LABEL: {
			type: DataTypes.STRING,
			allowNull: true
		},
		SHORT_LABEL: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IS_REQUIRED: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
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
		tableName: 'RB_QUESTION_DEF'
	});
};
