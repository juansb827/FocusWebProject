/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_ANSWER', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SURVEY_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		QUESTION_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		VALUE_TYPE: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		INT_VALUE: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		DECIMAL_VALUE: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DATE_VALUE: {
			type: DataTypes.DATE,
			allowNull: true
		},
		STRING_VALUE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TEXT_VALUE: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		SCORE: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'RB_ANSWER'
	});
};
