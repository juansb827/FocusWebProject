/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sysdcntablas', {
		caplicacion: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		cnomtabla: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		cdestabla: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		dfeccreadic: {
			type: DataTypes.DATE,
			allowNull: false
		},
		dfecmoddic: {
			type: DataTypes.DATE,
			allowNull: false
		},
		nomfisico: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		est_usuari: {
			type: 'BIT',
			allowNull: false
		},
		primaria: {
			type: 'BIT',
			allowNull: false
		},
		nomtag: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		llavetag: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		pri_segmts: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		est_detnt: {
			type: 'BIT',
			allowNull: false
		},
		es_docum: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		nemotec: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		filtra_ano: {
			type: 'BIT',
			allowNull: false
		},
		log_adic: {
			type: 'BIT',
			allowNull: false
		},
		log_mod: {
			type: 'BIT',
			allowNull: false
		},
		log_elim: {
			type: 'BIT',
			allowNull: false
		},
		log_anul: {
			type: 'BIT',
			allowNull: false
		},
		filtra_cia: {
			type: 'BIT',
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'sysdcntablas'
	});
};
