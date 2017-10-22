/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('REFERENCIA', {
		Referencia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Descripc: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Descventas: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Desc_large: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Familia: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Linea: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Grupo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Medida: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Corigen: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Mascara: {
			type: 'BIT',
			allowNull: true
		},
		Modelo: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Notrosimp: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cant_base: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccta04: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cundventas: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ntipomater: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Esquemac: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Pais: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Plazo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Precio_ven: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Bodefija: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Nancho: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nreporta: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Cantminv: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccta05: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fech_u_sal: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Inv_neg: {
			type: 'BIT',
			allowNull: true
		},
		Sublinea: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tipo_prod: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nlargo: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Cesqventas: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ncolrep: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nemonico: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Codsise: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Compromet: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Refabrica: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Rotacion: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ntara: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nmanlote: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Nactivar: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Presentaci: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cnum_lista: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Costo_usd: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Soporte: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Stock_max: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ref_vent: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Nfijo: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Ccodbar: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Material: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ccta01: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Iva: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Lote_mes: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Mc_unico: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Npesovol: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Stock_mes: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ngramos: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Lote_und: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Stock_min: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Estm_vta: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccta02: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fech_u_ent: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Nretencion: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Existencia: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Ccta03: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Fech_crea: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: ' '
		},
		Nrotacion: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Nconceptoig: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'REFERENCIA'
	});
};
