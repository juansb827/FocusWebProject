/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_OBJ_DEF', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_DEF_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		IS_SYSTEM: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_AUDITABLE: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_VIEWABLE: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_FLAGGABLE: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_DEPENDENT: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		SINGULAR_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PLURAL_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		NAME_TEMPLATE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DESCRIPTION: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		IS_DEPLOYED: {
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
		tableName: 'RB_OBJ_DEF'
	});
};
