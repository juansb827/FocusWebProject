/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_TEST', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		TEST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		SURVEY_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		SCORE: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		TAKEN_AT: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'RB_TEST'
	});
};
