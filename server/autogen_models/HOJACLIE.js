/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('HOJACLIE', {
		Tercero: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Sucursal: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' ',
			primaryKey: true
		},
		Contacto_1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnemonico: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Crutatrans: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Negocio: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Contacto: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Ctelc1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cteld1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctelm1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ctelsucu: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cupo_cred: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Dfecfac: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Dfecpag: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: ' '
		},
		Direccion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Dto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Grupo_clie: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Interes: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Num_lista: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Obs_clie: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Por_desc: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Accion: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccarm1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cciusucu: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdird1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdirm1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdpto: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ciudad: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cmaic1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cmaid1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cmaim1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cciud: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cdirc1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnomd1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnomm1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Agen_reten: {
			type: 'BIT',
			allowNull: true
		},
		Cal_inte: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Tel_cont: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tel_cont_1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Tipo_clien: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Tipo_pago: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Tpo_cuotas: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Tpo_muerto: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Valor_ica: {
			type: 'NUMERIC',
			allowNull: false,
			defaultValue: '((0))'
		},
		Vendedor: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Zona: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Carg_cont1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cargo_cont: {
			type: DataTypes.CHAR,
			allowNull: true,
			defaultValue: ' '
		},
		Cbloqueo: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: '0 '
		},
		Ccarc1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Ccard1: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: ' '
		},
		Cnomc1: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: ' '
		}
	}, {
		tableName: 'HOJACLIE'
	});
};
