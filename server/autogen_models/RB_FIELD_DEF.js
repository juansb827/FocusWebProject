/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_FIELD_DEF', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		FIELD_ID: {
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
		COLUMN_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FIELD_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		GROUP_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DATA_CLASS_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		IS_REQUIRED: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_READ_ONLY: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_TEXT_INDEXABLE: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_SYSTEM: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_AUDITABLE: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		HAS_PERMISSIONS: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		DISPLAY_LABEL: {
			type: DataTypes.STRING,
			allowNull: true
		},
		MAX_LENGTH: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		DESCRIPTION: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		UI_CLASS_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		PROPERTIES: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		SCRIPT_VALIDATION: {
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
		tableName: 'RB_FIELD_DEF'
	});
};
