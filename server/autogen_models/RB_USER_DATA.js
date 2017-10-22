/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RB_USER_DATA', {
		CUST_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_ID: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true
		},
		OBJ_DEF_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		PROCESS_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		STATUS_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		ROLE_ID: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		OBJ_NAME: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LOGIN_NAME: {
			type: DataTypes.STRING,
			allowNull: false
		},
		PASSWORD: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LOCATION_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		DEPARTMENT_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		FUNCTION_ID: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		STR0: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR4: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR5: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR6: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR7: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR8: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR9: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR10: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR11: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR12: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR13: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR14: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR15: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR16: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR17: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR18: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR19: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR20: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR21: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR22: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR23: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR24: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR25: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR26: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR27: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR28: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR29: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR30: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR31: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR32: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR33: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR34: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR35: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR36: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR37: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR38: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR39: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR40: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR41: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR42: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR43: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR44: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR45: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR46: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR47: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR48: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR49: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR50: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR51: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR52: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR53: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR54: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR55: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR56: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR57: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR58: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR59: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR60: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR61: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR62: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR63: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR64: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR65: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR66: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR67: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR68: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR69: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR70: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR71: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR72: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR73: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR74: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR75: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR76: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR77: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR78: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR79: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR80: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR81: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR82: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR83: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR84: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR85: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR86: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR87: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR88: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR89: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR90: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR91: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR92: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR93: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR94: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR95: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR96: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR97: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR98: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR99: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR100: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR101: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR102: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR103: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR104: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR105: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR106: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR107: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR108: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR109: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR110: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR111: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR112: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR113: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR114: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR115: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR116: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR117: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR118: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR119: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR120: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR121: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR122: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR123: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR124: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR125: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR126: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR127: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR128: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR129: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR130: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR131: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR132: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR133: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR134: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR135: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR136: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR137: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR138: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR139: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR140: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR141: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR142: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR143: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR144: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR145: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR146: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR147: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR148: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR149: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR150: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR151: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR152: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR153: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR154: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR155: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR156: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR157: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR158: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR159: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR160: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR161: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR162: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR163: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR164: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR165: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR166: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR167: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR168: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR169: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR170: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR171: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR172: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR173: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR174: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR175: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR176: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR177: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR178: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR179: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR180: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR181: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR182: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR183: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR184: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR185: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR186: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR187: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR188: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR189: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR190: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR191: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR192: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR193: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR194: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR195: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR196: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR197: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR198: {
			type: DataTypes.STRING,
			allowNull: true
		},
		STR199: {
			type: DataTypes.STRING,
			allowNull: true
		},
		INTG0: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG1: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG2: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG3: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG4: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG5: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG6: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG7: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG8: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG9: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG10: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG11: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG12: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG13: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG14: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG15: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG16: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG17: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG18: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG19: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG20: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG21: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG22: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG23: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG24: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG25: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG26: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG27: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG28: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG29: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG30: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG31: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG32: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG33: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG34: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG35: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG36: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG37: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG38: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG39: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG40: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG41: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG42: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG43: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG44: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG45: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG46: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG47: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG48: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG49: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG50: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG51: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG52: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG53: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG54: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG55: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG56: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG57: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG58: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG59: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG60: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG61: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG62: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG63: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG64: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG65: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG66: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG67: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG68: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG69: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG70: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG71: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG72: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG73: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG74: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG75: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG76: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG77: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG78: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG79: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG80: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG81: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG82: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG83: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG84: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG85: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG86: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG87: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG88: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG89: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG90: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG91: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG92: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG93: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG94: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG95: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG96: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG97: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG98: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG99: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG100: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG101: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG102: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG103: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG104: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG105: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG106: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG107: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG108: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG109: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG110: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG111: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG112: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG113: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG114: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG115: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG116: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG117: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG118: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG119: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG120: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG121: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG122: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG123: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG124: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG125: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG126: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG127: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG128: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG129: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG130: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG131: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG132: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG133: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG134: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG135: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG136: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG137: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG138: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG139: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG140: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG141: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG142: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG143: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG144: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG145: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG146: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG147: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG148: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		INTG149: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		DBL0: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL1: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL2: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL3: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL4: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL5: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL6: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL7: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL8: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL9: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL10: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL11: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL12: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL13: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL14: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL15: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL16: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL17: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL18: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL19: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL20: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL21: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL22: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL23: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL24: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL25: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL26: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL27: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL28: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL29: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL30: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL31: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL32: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL33: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL34: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL35: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL36: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL37: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL38: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL39: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL40: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL41: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL42: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL43: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL44: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL45: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL46: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL47: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL48: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		DBL49: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		TXT0: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT1: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT2: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT3: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT4: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT5: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT6: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT7: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT8: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT9: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT10: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT11: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT12: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT13: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT14: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT15: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT16: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT17: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT18: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT19: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT20: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT21: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT22: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT23: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT24: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT25: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT26: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT27: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT28: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT29: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT30: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT31: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT32: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT33: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT34: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT35: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT36: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT37: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT38: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT39: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT40: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT41: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT42: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT43: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT44: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT45: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT46: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT47: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT48: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TXT49: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		DATE0: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE1: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE2: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE3: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE4: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE5: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE6: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE7: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE8: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE9: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE10: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE11: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE12: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE13: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE14: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE15: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE16: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE17: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE18: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE19: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE20: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE21: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE22: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE23: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE24: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE25: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE26: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE27: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE28: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE29: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE30: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE31: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE32: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE33: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE34: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE35: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE36: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE37: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE38: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE39: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE40: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE41: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE42: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE43: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE44: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE45: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE46: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE47: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE48: {
			type: DataTypes.DATE,
			allowNull: true
		},
		DATE49: {
			type: DataTypes.DATE,
			allowNull: true
		},
		CREATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		CREATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		},
		UPDATED_BY: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		UPDATED_AT: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'RB_USER_DATA'
	});
};
