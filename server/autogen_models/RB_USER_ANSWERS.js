/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_USER_ANSWERS', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		USR_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		QUESTION_ID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ANSWER: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'RB_USER_ANSWERS'
	});
};
