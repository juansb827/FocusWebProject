/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CABMOV13', {
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Numero_cpb: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))',
			primaryKey: true
		},
		Nnumdocbas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Fecha: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Mes: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nano: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Oper_crea: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Transa: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Maquina: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nmes: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Dev_doc: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dev_num: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Anulado: {
			type: 'BIT',
			allowNull: false
		},
		Aplica_cre: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Bod_tras: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Descrip: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Dev_des: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fecha_crea: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Forma_imp: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dfechamodifico: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Cusermodifico: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctipdocbas: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		cidrecurso: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ''
		},
		nniif: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: '((0))'
		}
	}, {
		tableName: 'CABMOV13'
	});
};
