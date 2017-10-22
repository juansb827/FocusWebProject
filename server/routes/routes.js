var express = require('express');
var router = express.Router();
// focusweb/
router.get('/', function(req, res, next) {	
	var TB99PROYECTOS = global.databases["empresaTest"].models.TB99PROYECTOS;
	TB99PROYECTOS.findAll({}).then(function(articles){
		res.json(articles);
	}).catch(function(error){
		res.send(500, error);
	});
});


// GET focusweb/:compName
router.get("/companies/:compName", function(req, res, next){
	var SYSEMPRESAS=global.databases["db_focus"].models.SYSEMPRESAS;
	SYSEMPRESAS.findOne({
		where: {
			Idcodigo: req.params.compName.toUpperCase()
		}			
	}).then(function(company){		

		//volverlo atributo de sesion
		global.company=company;
		if(!company || company.length==0) {
			res.status(404).send({error :"No se encontro la empresa ", empresa: req.params.compName });
		}
		else if(!company.Nhabilweb) {
			res.status(404).send({error :"La empresa no tiene WEB habiltado", empresa: req.params.compName });			
		}else{
			res.send({msg :"Empresa encontrada", empresa: company.Empresa });			
		}		
	}).catch(function(error){
		return next(error);
	});
});


router.get("/companies/:compName/aplications",function(req,res,next){
	var SYSAPLHABILITADAS=global.databases["db_focus"].models.SYSAPLHABILITADAS;
	SYSAPLHABILITADAS.findAll({
		where: {
			//volverlo atributo de sesion
			EMPRESA: global.company.Ckeycodigo,
			HABILITADA: true
		}		
	}).then(function(modulosHabilitados){
		res.json(modulosHabilitados);
	});
});

//devuelve el menu al que un usuario tiene acceso (por ahora devuelve todo)
router.get("/companies/:compName/users/:uID/menu",function(req,res,next){
	
	var seq=global.databases["db_focus"].sequelize;
	var SYSMENUFOCUS=global.databases["db_focus"].models.SYSMENUFOCUS;
	var consulta="SELECT * FROM sysmenufocus "+  
		"LEFT  OUTER JOIN sysaplhabilitadas "+
		"on NUM_APLIC=CNUM_APLIC "+
		"where  empresa= :empresa AND habilitada='1'"
	seq.query( consulta, { 
		replacements : { empresa: "4595BA7358743531FC8E3307713D770CFC8E3307713D770CFC8E3307713D770C"},
		model: SYSMENUFOCUS 
	}).
	then(function(results) {
		var menu={};
		results.forEach(function(result){
			var nombreModulo=result.NOM_APLIC;
			//MENU
			if(menu[nombreModulo]==null){
				menu[nombreModulo]=[];				
			}
			//AGREGA EL SUBMENU
			menu[nombreModulo].push({
				CNUM_APLIC: result.CNUM_APLIC,
				NUMERAL: result.NUMERAL,
				PROMPT: result.PROMPT, 
				APL_ICO: result.APL_ICO,

			});
		});
		res.json(menu);
	});
	
});






module.exports= router;