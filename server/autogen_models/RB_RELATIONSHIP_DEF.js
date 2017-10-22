/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_RELATIONSHIP_DEF', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		RELATIONSHIP_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		RELATIONSHIP_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ORIGINAL_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_DEF1_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_DEF2_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SINGULAR_NAME1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PLURAL_NAME1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		SINGULAR_NAME2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		PLURAL_NAME2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IS_MULTIPLE1: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_MULTIPLE2: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		ORPHAN_CONTROL1: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		ORPHAN_CONTROL2: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		CLONE_RELATED1: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		CLONE_RELATED2: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		IS_SYSTEM: {
			type: DataTypes.CHAR,
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
		tableName: 'RB_RELATIONSHIP_DEF'
	});
};
