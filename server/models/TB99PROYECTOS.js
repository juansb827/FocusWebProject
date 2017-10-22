/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TB99PROYECTOS', {
		Cidproyecto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Cnomproyecto: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		},
		Nnivel: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cterminal: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ndiganivel: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ndigsnivel: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cestado: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cidencargado: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'TB99PROYECTOS',
		//timestamps: true
	});
};
