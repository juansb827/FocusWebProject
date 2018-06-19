var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {

    var seq=global.databases["db_focus"].sequelize;
    var SYSMENUFOCUS=global.databases["db_focus"].models.SYSMENUFOCUS;
    var consulta="SELECT * FROM TB99PROYECTOS";

    seq.query(consulta, { type: seq.QueryTypes.SELECT})
        .then(function(results) {
            res.json(results)
        })
    
});


router.get('/menu_id/:cnum_aplic/submenu_id/:numeral', function(req,res,next){
	var seq=global.databases["db_focus"].sequelize;
	var SYSMENUFOCUS=global.databases["db_focus"].models.SYSMENUFOCUS;
	var consulta="SELECT * FROM SYSMENUFOCUS WHERE  CNUM_APLIC=:cnum_aplic AND NUMERAL=:numeral";
	seq.query(consulta,{
		replacements : {
			cnum_aplic: req.params.cnum_aplic,
			numeral:req.params.numeral
		},
		model: SYSMENUFOCUS
	})
	.then(function(menuItem){
		var consulta=menuItem["COMANDOWEB"];
		if(!consulta){
			consulta="SELECT * FROM TB99PROYECTOS";
		}
		
		seq.query(consulta, { type: seq.QueryTypes.SELECT})
  		.then(function(results) {
    		res.json(results);
  		})
		
	});
	
	
});
module.exports= router;
