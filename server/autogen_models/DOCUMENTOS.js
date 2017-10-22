/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DOCUMENTOS', {
		Doc_numdoc: {
			type: 'NUMERIC',
			allowNull: true,
			defaultValue: '((0))'
		},
		Doc_numven: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Documento: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Fmt_impr: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Imp_inmed: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ncia: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		Nconmes: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ndocinter: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		No_reimpr: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Num_copias: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Aplicaci: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Doc_descri: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Doc_items: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Doc_numaut: {
			type: 'BIT',
			allowNull: false
		},
		Doc_numcop: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Prot_impre: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Tope: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Transa: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ciddescriptor: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nniif: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'DOCUMENTOS'
	});
};
